/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react'
import { APILoader } from '../APILoader'
import { WebStorage } from './WebStorage'

interface ISaveDataButtonClassState {
  loader: APILoader
}
export class SaveDataButtonClass extends React.Component<
  Record<string, unknown>,
  ISaveDataButtonClassState
> {
  constructor(props: Record<string, unknown>) {
    super(props)
    this.state = {
      loader: new APILoader(),
    }
  }

  saveData(): void {
    console.warn(this.state)
    const webStorage = new WebStorage({ loader: this.state.loader })
    webStorage.saveToSessionStorage()
  }

  render() {
    return (
      <div>
        <button onClick={() => this.saveData()}>Save Data</button>
      </div>
    )
  }
}
