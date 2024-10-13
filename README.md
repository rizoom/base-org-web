![Base](logo.webp)

# Base Web

Base is a secure, low-cost, developer-friendly Ethereum L2 built to bring the next billion users onchain. It's built on Optimism’s open-source [OP Stack](https://stack.optimism.io/).

<!-- Badge row 1 - status -->

[![GitHub contributors](https://img.shields.io/github/contributors/base-org/web)](https://github.com/base-org/web/graphs/contributors)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/w/base-org/web)](https://github.com/base-org/web/graphs/contributors)
[![GitHub Stars](https://img.shields.io/github/stars/base-org/web.svg)](https://github.com/base-org/web/stargazers)
![GitHub repo size](https://img.shields.io/github/repo-size/base-org/web)
[![GitHub](https://img.shields.io/github/license/base-org/web?color=blue)](https://github.com/base-org/web/blob/master/LICENSE.md)

<!-- Badge row 2 - links and profiles -->

[![Website base.org](https://img.shields.io/website-up-down-green-red/https/base.org.svg)](https://base.org)
[![Blog](https://img.shields.io/badge/blog-up-green)](https://base.mirror.xyz/)
[![Docs](https://img.shields.io/badge/docs-up-green)](https://docs.base.org/)
[![Discord](https://img.shields.io/discord/1067165013397213286?label=discord)](https://base.org/discord)
[![Twitter Base](https://img.shields.io/twitter/follow/Base?style=social)](https://twitter.com/Base)

<!-- Badge row 3 - detailed status -->

[![GitHub pull requests by-label](https://img.shields.io/github/issues-pr-raw/base-org/web)](https://github.com/base-org/web/pulls)
[![GitHub Issues](https://img.shields.io/github/issues-raw/base-org/web.svg)](https://github.com/base-org/web/issues)

## Setup

1. Ensure `nvm` is [installed](https://github.com/nvm-sh/nvm#install--update-script).
2. Clone the repository.
3. If `nvm` doesn't auto-load the Node.js environment when changing to the repo directory, run `nvm use`.
4. Enable Yarn by running `corepack enable`.

## Getting started

After cloning the repository begin by installing dependencies at the root.

```shell
yarn
yarn build
```

## Local development

To start a development server on localhost, run `yarn workspace @app/<project> dev`.

For example, to start the `web` app locally, you would run `yarn workspace @app/web dev`.

## Projects

There are three projects which can be run individually.

### Web

```
yarn workspace @app/web dev
```

### Docs

```
yarn workspace @app/base-docs dev
```

### Bridge

```
yarn workspace @app/bridge dev
```

## Contribution

We welcome contributions to Base! To contribute, please see [CONTRIBUTING.md](CONTRIBUTING.md).

## Updating the Base Ecosystem Page

Are you a builder who wants to add or update your project on the Base Ecosystem page? Follow these steps:

1. First, review the [ecosystem update template](.github/PULL_REQUEST_TEMPLATE/ecosystem-update.md) to see what information you'll need to provide.

2. Fork this repository.

3. Create a new branch for your changes.

4. Update the `web/apps/web/src/data/ecosystem.json` file with your project information. Each entry should follow this format:

   ```json
   {
     "name": "Your Project Name",
     "tags": ["category"],
     "description": "A brief description of your project (less than 200 characters)",
     "url": "https://your-project-url.com",
     "imageUrl": "/images/partners/your-project-logo.png"
   }
   ```

   5. When adding and/or updating a logo, place a 192x192 pixel PNG file in the `web/apps/web/public/images/partners/`. The file should be named appropriately (e.g., your-project-name.png). The logo should be App Store / iconographic version, not a full wordmark.

   6. Create a pull request with your changes.

By opening a PR to add your project, you authorize and license to Coinbase on a non-exclusive, worldwide, irrevocable, sublicensable, and royalty free basis to reproduce, distribute, transmit, make available, perform, display, or otherwise use the submitted Multimedia Assets for any purpose, including any marketing or promotional activities related to Base or Coinbase. Any goodwill associated with use of trademarks submitted in your Multimedia Assets will inure to your benefit. You further acknowledge and represent that you have all IP rights in the Multimedia Assets, that the Multimedia Assets do not infringe the rights of any third party, and that you have the right to grant this license to Coinbase.

**Note:** Submissions do not guarantee inclusion and all submissions are subject to review. Your project must be live on Base to potentially be included. Ensure all information is accurate and up-to-date.

### Tips for a successful submission

Below are some general guidelines to help you prepare your submission:

- App has been announced and released since at least 3 months
- App has a Terms of Service and Privacy Policy
- App supports HTTPS and 301 redirects HTTP requests
- App is an actual app, not a TGE, ICO, airdrop, or other similar events
- Signs of active development and/or community engagement can be found without concerning issues
- No indication that users have been harmed considerably by any issue
- No indication that issues have been concealed, ignored, or not addressed correctly in order to prevent new or similar issues from happening

If you have any questions, please reach out to us in [Base Discord](https://base.org/discord).
