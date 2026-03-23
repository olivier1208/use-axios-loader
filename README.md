# <p align="center"><img src="https://raw.githubusercontent.com/olivier1208/use-axios-loader/main/src/logo.svg" width="88" height="88" alt="use-axios-loader logo" /><br />use-axios-loader</p>

<p align="center">Tiny React hook that turns axios request activity into a single loading boolean.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/use-axios-loader">
    <img src="https://img.shields.io/npm/v/use-axios-loader.svg" alt="npm version" />
  </a>
  <a href="https://github.com/olivier1208/use-axios-loader/actions/workflows/ci.yml">
    <img src="https://github.com/olivier1208/use-axios-loader/actions/workflows/ci.yml/badge.svg" alt="CI status" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/npm/l/use-axios-loader.svg" alt="license" />
  </a>
  <a href="https://bundlephobia.com/package/use-axios-loader">
    <img src="https://img.shields.io/bundlephobia/minzip/use-axios-loader" alt="bundle size" />
  </a>
</p>

`use-axios-loader` attaches axios interceptors, tracks concurrent requests, and gives you a single `[loading]` value to drive a top bar, spinner, overlay, or skeleton state.

## Why

- Tracks only the requests it started, so ignored requests do not accidentally clear the loader.
- Works with the default `axios` export and custom instances created with `axios.create()`.
- Accepts exact URL strings and `RegExp` patterns for ignored requests.
- Cleans up interceptors automatically on unmount.
- Ships compact CJS and ESM builds with `sideEffects: false`.

## Installation

Install the hook with the common peer packages you already use in a React + axios app.

```bash
npm install use-axios-loader react axios
yarn add use-axios-loader react axios
pnpm add use-axios-loader react axios
bun add use-axios-loader react axios
```

## Usage

```jsx
import axios from 'axios';
import { useAxiosLoader } from 'use-axios-loader';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

export function AppShell() {
  const [loading] = useAxiosLoader(api);

  return (
    <div>
      {loading ? <div className="loader" /> : null}
      <main>...</main>
    </div>
  );
}
```

## Ignoring Requests

Pass a second argument to skip requests that should not affect the global loader.

```jsx
const ignoredUrls = [
  '/health',
  /\/analytics\/ping$/,
];

const [loading] = useAxiosLoader(api, ignoredUrls);
```

String values use exact matching. Regular expressions let you ignore URL patterns.

## API

```js
const [loading] = useAxiosLoader(axiosInstance, ignoredUrls);
```

- `axiosInstance`: an axios instance, including the default `axios` export.
- `ignoredUrls`: optional array of exact URL strings or `RegExp` matchers.
- `loading`: `true` while one or more tracked requests are still in flight.

## Compatibility

- React `>=16.8`
- CI runs on Node `18.x`, `20.x`, `22.x`, and `24.x`
- Published output includes both CommonJS and ESM entry points
- No `exports` gate, so existing top-level and deep package paths keep resolving as before

## Development

```bash
yarn test
yarn build
npm run size
```

## License

MIT © [olivier1208](https://github.com/olivier1208)
