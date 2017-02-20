const findReachableUrls = require('./')
const urls = [
  'https://google.com', // 200
  'https://github.com/nonexistent-url', // 404
  'https://github.com/OctoLinker/chrome-extension', // 301
]

findReachableUrls(urls, function(err, result) {
  console.log(result)
  // ['https://google.com', 'https://github.com/OctoLinker/chrome-extension']
})
