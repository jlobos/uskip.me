# uskip.me

Shorten URLs using Uskip.me and earn money :moneybag:

```js
const short = require('uskip.me')

short({ key: '9AoAAA', url: 'https://www.google.cl' })
.then(shortenedUrl => {
  console.log(shortenedUrl) // http://uskip.me/AdcDAA
})
```

## Installation

```console
$ npm install uskip.me
```

## Testing

```console
$ npm install
$ npm test
```
