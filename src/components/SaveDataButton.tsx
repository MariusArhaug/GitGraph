import { APILoader } from '../APILoader';
import { WebStorage } from './WebStorage';


export const SaveDataButton = () => {

    const saveData = () => {
        const loader = new APILoader()
        console.warn(loader)
        const webStorage = new WebStorage({loader});
        webStorage.saveToSessionStorage()
    }
  
    return(
        <div>
            <button onClick={saveData}>
                Save Data
            </button>
        </div>
  
        
    )
  }

  export default SaveDataButton;
  
  