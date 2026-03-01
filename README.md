# <p align="center"><img src="src/logo.svg" width="60" height="60" alt="use-axios-loader logo" /><br/>use-axios-loader</p>

<p align="center">
  <a href="https://www.npmjs.com/package/use-axios-loader">
    <img src="https://img.shields.io/npm/v/use-axios-loader.svg" alt="npm version" />
  </a>
  <a href="https://github.com/olivier1208/use-axios-loader/actions/workflows/ci.yml">
    <img src="https://github.com/olivier1208/use-axios-loader/actions/workflows/ci.yml/badge.svg" alt="Build Status" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/npm/l/use-axios-loader.svg" alt="license" />
  </a>
  <a href="https://bundlephobia.com/package/use-axios-loader">
    <img src="https://img.shields.io/bundlephobia/minzip/use-axios-loader" alt="bundle size" />
  </a>
</p>

> `use-axios-loader` is a tiny React Hook designed to easily add a loader to all your axios instances. It tracks the number of ongoing requests and provides a simple boolean to show/hide your loading indicator.

## ⚙️ Installation

```bash
npm install --save use-axios-loader
```
or
```bash
yarn add use-axios-loader
```

## 🚀 Usage

```jsx
import React from 'react'
import axios from 'axios'
import { useAxiosLoader } from 'use-axios-loader'

const MyComponent = () => {
  /**
   * Pass your axios instance to the hook.
   * It works with the default axios instance or any custom instance.
   */
  const [loading] = useAxiosLoader(axios)

  return (
    <div>
      {loading && <div className="loader">Loading...</div>}
      {/* Your component content */}
    </div>
  )
}
```

### Ignoring URLs

You can pass an array of URLs to ignore as a second parameter. This is useful for background requests that shouldn't trigger a global loader.
Supported types: `String` (exact match) or `RegExp`.

```jsx
const ignoredUrls = [
  'https://api.example.com/background-check', 
  /\/notifications/i
]
const [loading] = useAxiosLoader(axios, ignoredUrls)
```

## 🛠 Features

- ⚛️ **React Hooks**: Modern, clean API.
- 🚀 **Lightweight**: Zero dependencies (other than React and Axios).
- 🔄 **Smart Tracking**: Correct handles multiple concurrent requests.
- 🔧 **Customizable**: Works with any axios instance.
- 🛡 **Robust**: Automatically cleans up interceptors on unmount.

## License

MIT © [olivier1208](https://github.com/olivier1208)
