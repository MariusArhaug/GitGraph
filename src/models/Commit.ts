import { Model } from './Model'

export interface ICommit {
  short_id: string
  title: string
  committer_name: string
  created_at: string
  message: string
  web_url: string
}

export class Commit extends Model<ICommit> {
  public getShortId(): string {
    return this.props.short_id
  }

  public getTitle(): string {
    return this.props.title
  }

  public getCommitterName(): string {
    return this.props.committer_name
  }

  public getCreatedAt(): string {
    return this.props.created_at
  }

  public getMessage(): string {
    return this.props.message
  }

  public getWebUrl(): string {
    return this.props.web_url
  }
}
