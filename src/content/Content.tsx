import { APILoader } from "../APILoader"
import React from "react"
import { InfoBox } from "./Infobox"
import { Charts } from '../components'

interface IContentState {
  loader: APILoader
}
export default class Content extends React.Component<Record<string, unknown>, IContentState> {

  state: IContentState = {
    loader: new APILoader()
  }

  render() {
    const { loader } = this.state;
    return (
      <>
        <Charts loader={loader}/>
        <InfoBox loader={loader} />
      </>
    )
  }
}
