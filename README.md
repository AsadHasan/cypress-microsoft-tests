# Cypress Microsoft Tests

Basic automation tests of [Microsoft's website](https://www.microsoft.com/en-gb), with [Cypress](https://www.cypress.io/). Following tests are included:

- Basic functional tests (visiting homepage, and trying to add Xbox console to buying wishlist): Via vanilla Cypress.
- Accessibility testing: [A11y](https://www.a11yproject.com/) standards conformity check via [cypress-axe](https://github.com/component-driven/cypress-axe) plugin.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) auditing: Performance, accessibility, SEO and Progressive-Web-App checks through Lighthouse, via [cypress-audit](https://github.com/mfrachet/cypress-audit) plugin.
- Automated visual testing: Visual checking of homepage done via [Percy](https://percy.io/).
- Cross platform and cross browser testing: Done on [Browserstack](https://www.browserstack.com/).

### To run locally:

- Clone repositotory locally: (If using [GitHub CLI](https://cli.github.com/)) `gh repo clone AsadHasan/cypress-microsoft-tests`
- Run tests via [Docker](https://www.docker.com/get-started). This is the easiest method, as it doesn't require Node, Cypress or any browsers to be pre-installed (only Docker is required). It does _not_ run tests cross-browser though, neither does it do visual checks on Percy, or record run on Cypress dashboard: In project root, run (in a bash terminal or similar) `./docker_run_tests.sh`
