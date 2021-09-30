import { IGitLabIssue, IGitLabUser, IGitLabContributor } from './content/types'
import axios from './http-common'
import { AxiosError, AxiosResponse } from 'axios'
import { User, Issue, Contributor } from './models'
import { arrayOrUndefined } from './utils/arrayOrUndefined'

export class APILoader {
  private async getFeed<T>(parameter: string): Promise<AxiosResponse<T[]>> {
    return axios.get<T[]>(parameter)
  }

  public async getIssues(): Promise<Array<Issue> | undefined | string> {
    try {
      const response = await this.getFeed<IGitLabIssue>('issues')

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
      const response = await this.getFeed<IGitLabUser>('users')

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

  public async getContributors(): Promise<
    Array<Contributor> | undefined | string
  > {
    try {
      const response = await this.getFeed<IGitLabContributor>('contributors')

      return response.data.map((contributor: IGitLabContributor) => {
        return new Contributor({
          commits: contributor.commits,
          email: contributor.email,
          name: contributor.name,
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
}
