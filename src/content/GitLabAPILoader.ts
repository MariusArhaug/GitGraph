import { IIssue, IUser } from './types'
import { Issue } from '../models/Issue'
import axios from '../http-common'

export class APILoader {
  private async getFeed<T>(parameter: string): Promise<T[] | undefined> {
    const repsonse = await axios.get<T[]>(parameter)
    return repsonse.data
  }

  public async getIssues(): Promise<Array<Issue> | undefined> {
    const response = await this.getFeed<IIssue>('issues')
    if (!response) {
      return undefined
    }
    return response.map((issue: IIssue) => {
      return new Issue({
        ...issue,
      })
    })
  }

  public async getUsers(): Promise<Array<IUser> | undefined> {
    const response = await this.getFeed<IUser>('users')

    if (!response) {
      return undefined
    }

    return response
  }
}
