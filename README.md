# @pmcdevitt/react-use-the-things

> Custom react items

[![NPM](https://img.shields.io/npm/v/@pmcdevitt/react-use-the-things.svg)](https://www.npmjs.com/package/@pmcdevitt/react-use-the-things) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @pmcdevitt/react-use-the-things
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from '@pmcdevitt/react-use-the-things'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [PMcDevitt](https://github.com/PMcDevitt)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
