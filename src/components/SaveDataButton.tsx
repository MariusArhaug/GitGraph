import { WebStorage } from './WebStorage';


const SaveDataButton = () => {

    const saveData = () => {
        const webStorage = new WebStorage({});
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
  
  