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

import { useAxiosLoader } from 'use-axios-loader'

const ExampleComponent = () => {
  const [loading] = useAxiosLoader()
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

## License

MIT © [olivier1208](https://github.com/olivier1208)

---
