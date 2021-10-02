import { IGitLabIssue, IGitLabUser } from './content/types'
import { Issue } from './models/Issue'
import axios from './http-common'
import { AxiosError, AxiosResponse } from 'axios'
import { User } from './models'
import { arrayOrUndefined } from './utils/arrayOrUndefined'
import { WebStorageCache } from './WebStorageCache'

export class APILoader {
  readonly cahce: WebStorageCache

  constructor() {
    this.cahce = new WebStorageCache()
  }

  private async load<T>(parameter: string): Promise<AxiosResponse<T>> {
    return axios.get<T>(parameter)
  }

  private getCache<T>(key: string): AxiosResponse<T> | undefined {
    return this.cahce.getCache(key)
  }

  private async getFeed<T>(key: string): Promise<AxiosResponse<T>> {
    const sessionChace = this.getCache<T>(key)

    if (!sessionChace) {
      const response = await this.load<T>(key)
      this.cahce.setCahce(key, response)
      return response
    }
    return sessionChace
  }

  public async getIssues(): Promise<Array<Issue> | undefined | string> {
    try {
      const response = await this.getFeed<IGitLabIssue[]>('issues')

      return response.data.map((issue: IGitLabIssue) => {
        return new Issue({
          id: issue.id,
          title: issue.title,
          description: issue.description,
          assignees: this.getIssueAssignee(issue),
          state: issue.state,
        })
      })
    } catch (e) {
      const error = e as AxiosError
      if (!error.response) {
        return undefined
      }
      return `Status: ${error.response.status}`
    }
  }

  private getIssueAssignee(issue: IGitLabIssue): User[] | undefined {
    if (!issue.assignees) {
      return undefined
    }
    return arrayOrUndefined(
      issue.assignees.map((user: IGitLabUser) => {
        return new User({
          id: user.id,
          name: user.name,
          avatarUrl: user.avatar_url,
        })
      })
    )
  }

  public async getUsers(): Promise<Array<User> | undefined | string> {
    try {
      const response = await this.getFeed<IGitLabUser[]>('users')

      return response.data.map((user: IGitLabUser) => {
        return new User({
          id: user.id,
          name: user.name,
          avatarUrl: user.avatar_url,
        })
      })
    } catch (e) {
      const error = e as AxiosError
      if (!error.response) {
        return undefined
      }
      return `Status: ${error.response.status}`
    }
  }

  public async getUserIssues(user: User): Promise<Array<Issue> | undefined> {
    // TODO add cache/state
    const response = await this.getIssues()
    if (!response) {
      return undefined
    }
    if (typeof response === 'string') {
      return undefined
    }

    arrayOrUndefined(
      response.filter((issue) => {
        const assigneeIds = issue.getAssigneeIds()
        if (assigneeIds) {
          return assigneeIds.includes(user.getId())
        }
        return false
      })
    )
  }
}
