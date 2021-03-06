# Contributing

## Get started

This project is written in TypeScript with the React frontend framework alongside Tailwind CSS and is using Prettier and ESlint for code formatting. You need node v14 and yarn.

1. Install node v14. I recommend installing that with nvm

MacOS/Ubuntu: https://github.com/nvm-sh/nvm
Windows: https://nodejs.org/en/download/

```sh
nvm install 14
```

1. Make node v14 default

```sh
nvm alias default 14
```

3. Open a new terminal and verify node version (should return v14.X.X)

```sh
node -v
```

4. Install yarn

- Debian/Ubuntu: https://classic.yarnpkg.com/en/docs/install/#debian-stable
- macOS: https://classic.yarnpkg.com/en/docs/install/#mac-stable
- Windows: https://classic.yarnpkg.com/en/docs/install/

5. Open a new terminal and verify yarn version (should return 1.X.X)

```sh
yarn -v
```

6. Clone project

```sh
git clone git@gitlab.stud.idi.ntnu.no:it2810-h21/team-51/project-2.git
cd project-2
```

7. Install dependencies

```sh
yarn
```

8. Start dev mode

```sh
yarn start
```

Open http://localhost:3000 on your favourite browser.

Cheers, hopefully!

## Available Scripts

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.

`yarn test`

Launches the test runner in the interactive watch mode.

`yarn build`

Builds the app for production to the `build` folder.

`yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Naming conventions

We use the following naming conventions:

- FEAT - For developing new feature
- CHANGE - Updating/modifying existing code
- DRAFT - For work in progress code
- DELETE - Removal off code (no additions)

Commit messages need to follow one of these four tags before additional message i. e:
Commit messages also need to be written in present time.

`FEAT: add new component`

## Code reviews

Everytime a member of the group creates a merge request, it needs to reviewed and verified by atleast one person before merging it.
After the MR has been verfiied and accepted, the creator of the MR needs to merge it into the master branch.

Remember to squash commits when merging, since commit messages after dosen't make much sense in the master branch.

## Workflow

Everything that is merged or committed and pushed to `master` goes straight to production (need pipelines here) if all the tests are passing (see .gitlab-ci.yml). Because of that, the preferred workflow is to create a new MR (Merge Request) in GitLab. There you can request a code review from one of your teammates before your contribution is merged to `main`. When you create an MR, your code will run in GitLab CI/CD, where it will be tested and deployed to a review deployment.

## Folders

- `src` is where the source code is located

## Source code

The source code is written in TypeScript (https://www.typescriptlang.org) and is located in the `src` folder. The application starts with the `src/index.ts` file.

## Test

Jest (https://jestjs.io) is used for testing. All files within the `src` folder with the `<FILENAME>.test.ts` format will automatically be picked up by Jest.

You can run the tests including generating a coverage report with:

- `yarn test`

You can start jest with watch mode with:

- `yarn jest:watch`

You can run one single test file by running `yarn jest:watch <FILENAME>`, for example `yarn jest:watch src/..<FILENAME>.test.ts`.

## Editor

We recommend using Visual Studio Code as editor, but whatever you prefer will probably work. You might need to configure your editor to work with TypeScript, ESlint, Prettier, and Editorconfig.

### Visual Studio Code

#### Extensions

Editorconfig for VSCode:

- ESLint
- TailwindCSS
- Prettier - Code formatter
- Bracket Pair Colorizer
- Vim (for legends)

#### Workspace settings -> settings.json

```json
{
  "editor.formatOnSave": true,
  "javascript.validate.enable": false,
  "typescript.autoImportSuggestions.enabled": false
}
```

## Insomnia

You might know Postman, the Collaboration Platform for API Development. We use a similar tool when we fetch data from APIs.
