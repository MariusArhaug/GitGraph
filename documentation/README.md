# Documentation

## Folder structure:

    GitGraph
    ├── ...
    ├── documentation           # Documentation files
    ├── public                  # Public files
    ├── src                     # Source files
    │   ├── components          # Custom React Components that can be reused
    │   ├── content             # Content folder with loader parent components
    │   ├── styles              # Style files
    │   ├── App.tsx             # Root component
    |   ├── APILoader.ts        # Main entry point for loading data from GitLab API.
    │   ├── index.tsx           # Entry point for react
    └── ...

# Dependencies

Currently we are using the following dependencies:

- Axios
- TailwindCSS
- Recharts
- Lodash

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
- It's faster to write and makes consistentency in styling easier.

<br/>

## Why Recharts?

Recharts is a graph/chart library built ontop of d3.js and made for React. Making various graphs is as simple as importing their respective components and feeding them data from the GitLab API.

- Highly flexible
- Easy to use
- Popular library

# API

To fetch data from the GitLab API we've created a single loader object. Called [APILoader.ts](./../src/APILoader.ts)

Here we're using Axios to request data from the [the GitLab API](https://docs.gitlab.com/ee/api/api_resources.html) with our own project as the target project.

The data we're fetching is:

- Users
- Contributors
- Issues
- Commits

The API key used to access this data is defined in a .env in the root directory of the project. As the API key is sensitive data this is not pushed to the repository.
The .env file should have the following format:

```sh
REACT_APP_GITLAB_API_KEY=[api-key]
```

Keeping all loading logic in one object allows us to keep track of the objects state (if necesseary) and makes its easier to keep track of what GitLab endpoints are being requested.

When calling one of the **APILoader**'s methods, it uses the _WebStorageCache_ object to both store and load the request data from the GitLab API. Everytime we fetch data directly from the GitLab API, we also store this data in the browser's **Session Storage**. Doing this allows us to do less direct calls to the API, and in return makes the website faster and less intensive on the user's system.

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

<br/>

# Technological requirements from customer

## Local storage

Local and session storage

## Component structure

    index.tsx                               # React entry point
        └── Layout.tsx                      # General layout, wraps everything.
                ├──Navbar.tsx               # Navigation
                ├──Header.tsx               # Top section of the website
                ├──Content.tsx              # Main component containing the content
                │    └──APILoader.tsx       # Data from the API is served
                └──Footer.tsx               # Footer of the website

## Structure

Our website is using Axios to gathr data from GitLab's resource REST API. The response is in a form of a json object, with _TypeScript_ we can give these JSON values types and allow us to safely access values on these objects. In **APILoader.ts** all the main fetching functions lie. All stored within a single class object that allow us maintain state if we want, (not necessairly React state (useState etc)). The data is then loaded into _models_ that allow us to further manipulate data within the object encapsulation.

The main React component for the website is **Content.tsx** that further divides into main parent class components such as **UserList** and **IssueList** these components use the **APILoader** to load their nessecarry data when that component is created, this is done with **ComponentDidMount** and only occurs once.

Pipeline first builds project, which should fail if invalid ts is pushed.  
The testing stage of the pipeline ensures all tests are passed and prints a coverage report in the console.
Upon pushing to master the coverage-badge in the GitLab repo is updated.
The eslint job checks that eslint doesn't throw any errors for the project.
<br/>

# Testing

A test coverage badge has been added to the main README file aswell as the GitLab repo. This bade gives us insight into how much of the codebase has been throughrly tested. Thus far not alot.

We've implemented some snapshot tests in order to make sure that data we're gathering from the API' matchs with expected data from the API. These sorts of tests are there to help us make sure that if we make alterations to the APILoader methods that we do not introduce some new wierd data type.
