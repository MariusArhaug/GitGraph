import { render } from '@testing-library/react'
import { APILoader } from '../../APILoader';
import IssueList from '../../content/IssueList';
import { WebStorage } from '../WebStorage'

test('testWebStorage', () => {

    const loader = new APILoader
    render(<IssueList loader={loader}/>)

    const webStorage = new WebStorage({});

    webStorage.saveToSessionStorage()

})
