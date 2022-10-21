# BonusBank Documentation Portal

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Basic commands and information

### Installation

```
$ npm ci
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The Website is automatically deployed on every `pull request` merged to the `docs-staging` and `docs-production` branch


## Repository Branch structure

The current repository has the following base-protected branches:
- `main`: Main branch, used to store and access the latest releases to production
- `development`: Working branch, used to review the current code and work on future updates
- `docs-staging`: Staging Deployments, branch used for the CICD workflow. Merges to this branch will trigger the deployment on the staging environment [docs-staging](https://docs-staging.bonusbank.eu/)
- `docs-production`: Production Deployments, branch used for the CICD workflow. Merges to this branch will trigger the deployment on the production environment [docs](https://docs.bonusbank.eu/)

All the above-mentioned **branches are protected**, contributors are expected to propose changes by creating pull requests to the `development`. **Pull Requests made to any other above-mentioned branch** from unauthorized contributors **will be rejected**.

## Contribution workflow

The recommended workflow for any contribution made to this repository is:
1. **Create a new branch** based on the `development` branch. Name the new branch accordingly to the changes that you are about to make. Self-explanatory and intuitive branch names are preferred.
2. **Apply the desired changes**. Create, modify or delete files accordingly to the changes you are implementing.
   - Task-specific commits with comprehensive names are preferred
4. **Test your changes**. After applying your changes make sure to test at least:
   - Test your changes to ensure that they are displayed correctly for different display sizes (phone screens, tablets, laptops, ...)
   - Run `npm run build` to ensure that no issue is found while trying to build the app.
5. **Fetch latest changes**. Merge any changes made to the `development` branch to your current and resolve any conflicts that might exist.
6. **Create a pull request** to the `development` branch that fits with the following requirements:
   - Name the request in a self-explanatory and intuitive way
   - Write a comprehensive description of the changes you have made and what triggered them.
   - Require at least one Code Review, default to the proposed code owner of the modified files.
7. Resolve the requested changes from the code reviewer and wait for the resolution of your pull request.