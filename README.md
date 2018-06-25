# 基于 Vue2.0 的svg-loading组件

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
import SvgLoading from 'svg-laoding'
```

## Props


## Example

```js
<template>
  <div id="app">
    <svg-loading v-if="loading"></svg-loading>
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
