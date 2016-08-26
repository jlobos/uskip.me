
const request = require('request')

class Uskip {
  constructor (key) {
    if (!key) throw new Error('key is required')
    this.key = key
  }

  short (link, cb) {
    if (!link) return cb('link is required')
    request({
      uri: `http://uskip.me/api/${this.key}`,
      qs: { s: link }
    }, (error, response, body) => {
      cb(error || (response.statusCode !== 200), body)
    })
  }
}

module.exports = Uskip
