# uskip.me

Shorten URLs using Uskip.me and earn money :moneybag:

## Install

```bash
$ npm install --save uskip.me
```

## Usage

```js
const short = require('uskip.me')

short({ key: '9AoAAA', url: 'https://www.google.cl' })
.then(shortenedUrl => {
  console.log(shortenedUrl)
  // http://uskip.me/AdcDAA
})
```

## License

MIT
