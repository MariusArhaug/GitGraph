import { APILoader } from "../APILoader";
import IssueList from '../content/IssueList'

export class WebStorage {
    
    readonly state : Record<string, APILoader> 

    constructor(props: {loader: APILoader}) {
      this.state = {
        loader: props.loader
      }
    }

    saveToSessionStorage() {
      const issueList: IssueList = new IssueList({loader: this.state.loader})
      console.warn("penis")
      console.warn(Promise.all(issueList.getIssues()))
      window.sessionStorage.setItem('issueList', JSON.stringify(issueList.getIssues()))
    }

    loadFromSessionStorage() {
      const issueListJSON = window.sessionStorage.getItem('issueList')
      if (issueListJSON == null) {
        return null;
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const issueList: IssueList = JSON.parse(issueListJSON)
      return issueList
    }

  }