# uskip.me

Shorten URLs using Uskip.me and earn money :moneybag:

```js
const Uskip = require('uskip.me')

const uskip = new Uskip('kZrfrYdn')

uskip.short('https://www.google.com', (err, url) => {
  console.log(err, url)
})
```

## Installation

```
$ npm i uskip.me
```

## Testing

```
$ npm i
$ npm test
```
