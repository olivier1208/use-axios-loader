# use-axios-loader

> A tiny package to add a loader to all axios instances

[![NPM](https://img.shields.io/npm/v/use-axios-loader.svg)](https://www.npmjs.com/package/use-axios-loader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-axios-loader
yarn add use-axios-loader
```

## Usage

```jsx
import React, { Component } from 'react'
import axiosInstance from 'axios'

import { useAxiosLoader } from 'use-axios-loader'

const ExampleComponent = () => {
  // Pass the axios instance to the hook
  // Allows you tu customize easily your instance
  const [loading] = useAxiosLoader(axiosInstance)
  return (
    <>
      {loading
      ? <img src="path/to/loader"}/>
      : <div>My data</div>
      }
    </>
  )
}
```

You may also pass an array of URLs to ignore. This is the single parameter accepted by this hook.

```jsx
const ignoredUrls = ['https://myignoredurl.com', 'anotherignored.com']
const [loading] = useAxiosLoader(ignoredUrls)
```

All urls passed, won't trigger the loader.

## License

MIT © [olivier1208](https://github.com/olivier1208)

---
