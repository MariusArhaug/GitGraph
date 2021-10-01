import { WebStorage } from './WebStorage';
import IssueList from '../content/IssueList';


const SaveDataButton = ( props: { webStorage: WebStorage, issueList: IssueList } ) => {

    const { webStorage } = props;

    const saveData = () => {
        webStorage.saveToSessionStorage()
    }
  
    return(
        <div onChange={saveData}>
            <button onClick={saveData}>
                Save Data
            </button>
        </div>
  
        
    )
  }

  
  export default SaveDataButton;
  
  