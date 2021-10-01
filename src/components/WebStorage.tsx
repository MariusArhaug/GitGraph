import { APILoader } from "../APILoader";
import React from "react";
import IssueList from '../content/IssueList'

interface IContentState {
    loader: APILoader
  }
  
export class WebStorage extends React.Component {
  
    state: IContentState = {
      loader: new APILoader()
    }

    saveToSessionStorage() {
      const loader: APILoader = this.state.loader
      const issueList: IssueList = new IssueList({loader})
      window.sessionStorage.setItem('issueList', JSON.stringify(issueList))
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