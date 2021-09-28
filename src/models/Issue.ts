import { IIssue } from '../content/types'
import { Model } from './Model'

export class Issue extends Model<IIssue> {
  public getId(): number {
    return this.props.id
  }

  public getTitle(): string {
    return this.props.title
  }

  public getDescription(): string {
    return this.props.description
  }
}
