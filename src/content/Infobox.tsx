import React from 'react'
import { APILoader } from '../APILoader'
import { IssueList, UserList } from '.'

interface IInfoBoxState {
  loader: APILoader
}
export class InfoBox extends React.Component<{ loader: APILoader }, IInfoBoxState> {

  state: IInfoBoxState = {
    loader: this.props.loader
  }

  render() {
    const { loader } = this.state
    return (
      <div className=" flex justify-between flex-shrink bg-gray-700 p-4">
        <UserList loader={loader} />
        <IssueList loader={loader} showPrecentage={true} />
      </div>
    )
  }
}
