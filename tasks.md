
# Tasks

## Task 1

- Clone template repo
- Make a new branch
- Make a github action that builds a pull request
- Push the changes and create a pull request

<details>
    <summary>Hint</summary>
Gh action support multiple triggers, one of them is `pull_request` which is triggered when a PR is created or updated.
When running a gh action usually you want to checkout the code, as this is not done by default you need to add a step to do this.
In this project your need to run `npm install` and `npm run build` to build the project.

The below code needs to be added to the file in .github/workflows/ci.yml

```yaml
name: CI # Name of the workflow

on:
  pull_request: #Runs when pull request is created or updated

jobs:
  build:
    name: Build # Name of your job
    runs-on: ubuntu-latest # What OS to run on, usually windows-latest or ubuntu-latest

    steps:
      - name: Checkout code #When the github action starts its an empty container, so to interact with your codebase you need to checkout the repo first
        uses: actions/checkout@v2

      - name: Build # This step will install npm dependencies and build the project
        shell: bash
        run: |
          npm install
          npm run build

```
</details>

## Task 2

- Merge your the pull request from task 1
- Make the action from task 1 mandatory as a branch protection rule

<details>
    <summary>Hint</summary>
To make the action mandatory you need to add a branch protection rule.
1. Go to github settings in the web browser
2. Navigate to rules and then rulesets
3. Click new branch ruleset
4. Give it a name (I usually call it main)
5. Set enforcement status to active
6. Click add target and select include default branch (main)
7. Scroll down and check `Require status checks to pass`
8. Click add checks
9. Write the name of the job in your ci.yml workflow (Build)
10. Click create

Now you can make a pull request to check if its working
</details>

## Task 3

- Add a badge from [shields](https://shields.io) to the readme.md

<details>
    <summary>Hint</summary>

To add a badge to the readme you need to add a markdown snippet.
The snippet should look something like this:
\![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/<Github username>/<repo name>/<Workflow name>?label=Build)
</details>

## Task 4 

- Make the CI build action run on both Windows and Ubuntu runners before passing.

<details>
    <summary>Hint</summary>

To run the action on both Windows and Ubuntu you need to add a matrix to the action.
The matrix should look something like this:
```yaml
strategy:
  matrix:
    os: [ubuntu-latest, windows-latest]
```
You can then use the `matrix.os` variable to run different commands based on the OS.
</details>


## Task 5 

- Deploy the application as a github page

<details>
    <summary>Hint</summary>

Look at the gh-page-deploy.yml file in the .github/workflows folder
This file is a template for deploying a static site to github pages.
You need to change the `run` step to build your project and then deploy it to the gh-pages branch.

```yaml
      - name: Deploy
        run: |
          npm install
          npm run build
```
</details>

## Task 6 

- Update the gh-page-deploy.yml file to be triggered by workflow_dispatch
- Trigger the deployment

<details>
    <summary>Hint</summary>
    ```yaml
    on:
        workflow_dispatch:
    ```
</details>

## Task 7 

- use the github event object to get the commit id and add it node env with the name of VITE_commitId
- Redeploy the application and check the page for the commit id

<details>
    <summary>Hint</summary>

Look at the gh-page-deploy.yml file in the .github/workflows folder
This file is a template for deploying a static site to github pages.
You need to change the `run` step to build your project and then deploy it to the gh-pages branch.

```yaml
      - name: Deploy
        run: |
          npm install
          npm run build
          echo "VITE_commitId=${{github.sha}}" >> .env
```
</details>


## Task 8

- Update the gh-page-deploy.yml file to create a github issue with the title "Deployed commit id: <commit id>" 

<details>
    <summary>Hint</summary>
You are a pro, no more hints for you.
</details>

## Task 9 

- Create a github action that runs on a schedule and closes all issues with the label "fixed"

<details>
    <summary>Hint</summary>
You are a pro, no more hints for you.
</details>

## Task 10 

- Create a github action that runs on a schedule and updates all npm packages then creates a PR with the changes

<details>
    <summary>Hint</summary>
You are a pro, no more hints for you.
</details>

## Task 11

- Help others who are stuck

<details>
    <summary>Hint</summary>
Really dude?
</details>


