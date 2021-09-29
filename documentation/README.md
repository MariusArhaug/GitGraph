# Documentation

### Folder structure:
    gitGraphs
    ├── ...
    ├── documentation           # Documentation files
    ├── public                  # Public files
    ├── src                     # Source files
    │   ├── components          # Custom React Components
    │   ├── content             # Content folder (`APIManager`, `types`)
    │   ├── styles              # Style files
    │   ├── App.tsx             # Root component
    │   ├── index.tsx           # Entry point for react
    └── ...


# Dependencies
## Why Axios?
Axios is a promise-based HTTP Client. It has all the basic functionalities required to do http requests from both node.js and the browser.\
We chose Axios over fetch because of:
- Ease of use, and previous experience with the technology.
- Cleaner code due to automatic JSON stringification when sending requests (not supported by the native Fetch API).
- Native protection against cross-site request forgery (XSRF) attacks.
- Better error handling, and the ability to intercept, cancel, and timeout HTTP requests.



The API key used is defined in a .env in the root directory of the project. As the API key is sensitive data this is not pushed to the repository.
The .env file should have the following format: `REACT_APP_GITLAB_API_KEY=[api-key]`


### CI (Pipeline)
Pipeline first builds project, which should fail if invalid ts is pushed.  
The testing stage of the pipeline ensures all tests are passed and prints a coverage report in the console.
Upon pushing to master the coverage-badge in the GitLab repo is updated.
The eslint job checks that eslint doesn't throw any errors for the project.


