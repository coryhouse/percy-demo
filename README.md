# Percy Demo

This project showcases using [Percy](https://percy.io/) for automated image-based tests.

## Goal

Run 3 types of tests via CI:

1. Jest
2. Automatically generated [Visual Storybook tests via Percy](https://docs.percy.io/docs/storybook) for all stories. Anytime a story changes visually, the CI server should block the build.
3. Visual app tests via [Cypress and Percy](https://docs.percy.io/docs/cypress). Declare a visual test in Cypress via a single command: `cy.percySnapshot()`.

[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Bitnative-LLC/percy-demo)

## Quick Start

```
npm i
npm start
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How was this built?

1. Run create-react-app: `npx create-react-app percy-demo`
1. Add Storybook: `npx -p @storybook/cli sb init`

## How was storybook for Percy added?

1. Add Percy for Storybook: `npm i --save-dev @percy/storybook`
1. [Add "snapshot" npm script to run Percy against Storybook](https://github.com/coryhouse/percy-demo/blob/master/package.json#L17)
1. Create a new project on Percy's site called `percy-demo`.
1. Select the `percy-demo` project. Under integrations tab, click "GitHub", then connect my GitHub account.
1. Link the Percy project to this GitHub repo under the organizations->integrations tab on the Percy site.
1. Create pull request in GitHub. Add TravisCI to GitHub repo by clicking "several apps are available" under "Continuous integration has not been set up" in the PR. Select TravisCI.
1. Add PERCY_TOKEN to TravisCI environment variables.
1. Add .travis.yml

## How was Percy Cypress image support added?

1. `npm i cypress @percy/cypress`
1. [Add to cypress/support/commands.js](https://docs.percy.io/docs/cypress#section-setup)
1. Add npm script for ci: `percy-cypress-app:ci`

## Helpful Links:

https://docs.percy.io/docs/cypress-tutorial
https://github.com/percy/example-percy-cypress
https://github.com/cypress-io/cypress-example-kitchensink/blob/master/.travis.yml
