import { Model } from './Model'

interface IContributor {
  name: string
  email: string
  commits: number
}

export class Contributor extends Model<IContributor> {
  public getName(): string {
    return this.props.name
  }

  public getEmail(): string {
    return this.props.email
  }

  public getCommits(): number {
    return this.props.commits
  }
}
