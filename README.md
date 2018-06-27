# Using Vue2.0 svg-loading component

## Install

<i>You can use Yarn or NPM</i>
```bash
npm install --save svg-loading
```
OR
```bash
yarn add svg-loading
```

## Usage

```js
import SvgLoading from 'svg-loading'
```

## Props
|Name|Type|Default|Description|
|:----- |:------|:------|:------|
|size |Number |50 |Set the loading size |
|color |String |#58b7ff |Set the loading color |
|visible |Boolean |false |Set the loading display |

## Example

```js
<template>
  <div id="app">
    <svg-loading :visible="loading"></svg-loading>
  </div>
</template>

<script>

import SvgLoading from 'svg-loading'
export default {
  data() {
    loading: false
  },

  created() {
    setTimeout(() => { this.loading = true }, 1000)
  }
}
</script>
```

## Development

SvgLoading now uses Poi for development

* yarn dev: Run example in development mode
* yarn build: Build component in both format

## License

MIT
