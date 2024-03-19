# Contributing

## Feature Requests and Bug Reports

To request a feature or report a bug, [open an issue](https://github.com/TeddTech/ribby/issues/new/choose)
with the appropriate template. Please make sure to fill out all of the template details so that the feature request or
bug report can be properly evaluated and triaged.

## Pull Requests

We do all of our work in branches. If you are starting work on a new feature or bug fix, create a new branch from [main][main]:

```bash
git checkout main
git checkout -b your-branch-name
```

Give your branch a descriptive name:

- For a new feature, call it `feat/description-of-feature`
- For a bug fix, call it `fix/description-of-bug`

When committing your changes, use [Conventional Commits](https://conventionalcommits.org/). Your commits will be automatically
[linted](https://www.google.com/search?q=husky+lint-staged+youtube&sca_esv=19e1b63181baf887&sxsrf=ACQVn08bvX-qTleO21Yg8aS-tkSPxhY-jQ%3A1710571659989&ei=i0D1Zf77O4Pk0PEPz6-V6A8&ved=0ahUKEwi-7Z-BmPiEAxUDMjQIHc9XBf0Q4dUDCBA&uact=5&oq=husky+lint-staged+youtube&gs_lp=Egxnd3Mtd2l6LXNlcnAiGWh1c2t5IGxpbnQtc3RhZ2VkIHlvdXR1YmUyCBAAGIAEGKIEMggQABiABBiiBEjhB1DLBVjLBXAAeAGQAQCYAVWgAaABqgEBMrgBA8gBAPgBAZgCAqACpgHCAgQQIxgnmAMA4gMFEgExIECSBwEyoAfBAw&sclient=gws-wiz-serp);
you must address any linting errors before submitting a pull request.

When your work is complete, open a pull request against the [main][main] branch:

- The title of the pull request is in the format of `<type>: <description> (resolves <issue-id>)`
  - For example, for a new feature that resolves the issue id #1, the title is
  `feat: description of the feature (resolves #1)`. This makes sure the issue id(s) is included in the commit history for
  easy access in the future.
- Please make sure to fill out the pull request template.

During development we **rebase and merge** all pull requests for changes from feature branches going into `main`.
When ready for a release, we **merge commit** changes from `main` into `prod`, deploy to a google cloud platform production evironment using github actions, then cut a release using **sematic release**.

## Milestones and Releases

Issues and their corresponding pull requests will be assigned to a milestone by the development team. Once all
of the issues in a given milestone have been resolved, the development team will close the milestone and merge the [main][main]
branch into [prod][prod].
A release will then be tagged and a changelog generated, as follows:

- For [patch releases](https://semver.org/#spec-item-6), you can tag the release and generate a changelog by conventional committing according to [semantic release](https://semantic-release.gitbook.io/semantic-release/#how-does-it-work) defaults.
- For [minor releases](https://semver.org/#spec-item-7), you can tag the release and generate a changelog by conventional committing according to [semantic release](https://semantic-release.gitbook.io/semantic-release/#how-does-it-work) defaults.
- For [major releases](https://semver.org/#spec-item-8), you can tag the release and generate a changelog by conventional committing according to [semantic release](https://semantic-release.gitbook.io/semantic-release/#how-does-it-work) defaults.

[main]: https://github.com/TeddTech/ribby/tree/main
[prod]: https://github.com/TeddTech/ribby/tree/prod
