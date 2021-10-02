/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import { APILoader } from '../APILoader';
import { WebStorage } from './WebStorage';

interface ISaveDataButtonClassState {
    loader: APILoader,
}

export class SaveDataButtonClass extends React.Component<Record<string, unknown>, ISaveDataButtonClassState> {

    state: ISaveDataButtonClassState = {
        loader: new APILoader()
    }

    public saveData (): void {
        const { loader } = this.state;
        const webStorage = new WebStorage({ loader });
        webStorage.saveToSessionStorage()
    }
  
    render() { 
        return(
        <div>
            <button onClick={this.saveData}>
                Save Data
            </button>
        </div>
    )
    }
  }

  
  export default SaveDataButtonClass;
  
  