# use-axios-loader

> A tiny package to add a loader to all axios instances

[![NPM](https://img.shields.io/npm/v/use-axios-loader.svg)](https://www.npmjs.com/package/use-axios-loader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-axios-loader
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'use-axios-loader'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [scorpioliv](https://github.com/scorpioliv)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
