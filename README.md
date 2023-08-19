<h1 align="center">sinon-timers-repeatable</h1>

<p align="center">A version of Sinon's `useFakeTimers` that you can call multiple times in a test.</p>

<p align="center">
	<a href="#contributors" target="_blank">
<!-- prettier-ignore-start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<img alt="All Contributors: 1 🤝" src="https://img.shields.io/badge/all_contributors-1_🤝-21bb42.svg" />
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- prettier-ignore-end -->
	</a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/sinon-timers-repeatable" target="_blank">
		<img alt="Codecov Test Coverage" src="https://codecov.io/gh/JoshuaKGoldberg/sinon-timers-repeatable/branch/main/graph/badge.svg"/>
	</a>
	<a href="https://github.com/JoshuaKGoldberg/sinon-timers-repeatable/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank">
		<img alt="Code of Conduct: Enforced 🤝" src="https://img.shields.io/badge/code_of_conduct-enforced_🤝-21bb42" />
	</a>
	<a href="https://github.com/JoshuaKGoldberg/sinon-timers-repeatable/blob/main/LICENSE.md" target="_blank">
	    <img alt="License: MIT 📝" src="https://img.shields.io/badge/license-MIT_📝-21bb42.svg">
    </a>
	<a href="https://github.com/sponsors/JoshuaKGoldberg" target="_blank">
    	<img alt="Sponsor: On GitHub 💸" src="https://img.shields.io/badge/sponsor-on_github_💸-21bb42.svg" />
    </a>
	<img alt="Style: Prettier 🧹" src="https://img.shields.io/badge/style-prettier_🧹-21bb42.svg" />
    <img alt="TypeScript: Strict 💪" src="https://img.shields.io/badge/typescript-strict_💪-21bb42.svg" />
</p>

`sinon.useFakeTimers()` is a wonderful API, but crashes if you call it twice in the same test:

```plaintext
TypeError: Can't install fake timers twice on the same global object.
    at Object.install (.../node_modules/sinon/pkg/sinon.js:6783:19)
    at createClock (.../node_modules/sinon/pkg/sinon.js:4676:31)
    ...
```

That can be inconvenient if you want to `useFakeTimers()` inside setup functions.

This package provides a `useFakeTimers` that:

- Lazily creates a `clock = sinon.useFakeTimers()` on-demand
- If a global `afterAll` exists, calls `clock.reset()` after each test

That way you can call `useFakeTimers()` whenever you want, and not have clock state shared between tests.
Hooray! ✨

## Usage

```shell
npm i sinon-timers-repeatable -D
```

```ts
import { useFakeTimers } from "sinon-timers-repeatable";

export function createFakes() {
	return {
		clock: useFakeTimers(),
		// ...
	};
}
```

`useFakeTimers` takes in the same parameters as `sinon.useFakeTimers`.

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 💖

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg"/><br /><sub><b>Josh Goldberg</b></sub></a><br /><a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💙 This package is based on [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)'s [template-typescript-node-package](https://github.com/JoshuaKGoldberg/template-typescript-node-package).
