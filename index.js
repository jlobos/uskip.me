const fetch = require('node-fetch')

module.exports = ({ key, url }) => {
  return new Promise((resolve, reject) => {
    fetch(`http://uskip.me/api/${key}?s=${url}`)
    .then(res => {
      if (res.status !== 200) {
        return reject('Error occurred in fetch API')
      }

      res.text().then(link => resolve(link))
    })
  })
}
