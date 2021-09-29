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

<br/>

## Why Tailwind?

Tailwind is a highly customizable CSS framework.\
We chose to use Tailwind because of:
- Eliminates the complexity of traditional CSS styling and makes the code more maintainable.
- It's faster to write and makes it easier to stay consistent when styling.

<br/>

# API

The API key used is defined in a .env in the root directory of the project. As the API key is sensitive data this is not pushed to the repository.
The .env file should have the following format: `REACT_APP_GITLAB_API_KEY=[api-key]`

<br/>

# CI (Pipeline)
A pipeline is a group of jobs that get executed in stages.\
1. Build stage defined in `.gitlab-ci.yml`\
    The building stage ensures that the code contains only valid TypeScript.
2. Test stage defined in `.gitlab-ci.yml`\
    The testing stage ensures that all tests are passed and returns a coverage report.
3. Linting stage defined in `.gitlab-ci.yml`\
    The linting stage ensured that the code does not contain errors conflicting with our ESLint rules.

 Additionally, a coverage-badge in the GitLab repo is updated when the master branch is updated.


