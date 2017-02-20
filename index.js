const heads = require('heads')
const pify = require('pify')

function findReachableUrls(urls, callback) {
  const result = []

  if (typeof urls === 'string') {
    urls = [urls]
  }

  heads(urls)
    .then((codes) => {
      codes.forEach((code, index) => {
        if (code === 200) result.push(urls[index])
      })

      return callback(null, result)
    })
    .catch(callback)
}

module.exports = require('pify')(findReachableUrls)
