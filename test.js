const test = require('tape')
const findReachableUrls = require('./')

const urls = [
  'https://google.com', // 200
  'https://github.com/nonexistent-url', // 404
  'https://github.com/OctoLinker/chrome-extension', // 301
]

test('findReachableUrls', function (t) {
  t.plan(4)

  findReachableUrls(urls, function(err, result) {
    t.deepEqual(result, [
      'https://google.com',
      'https://github.com/OctoLinker/chrome-extension',
    ], 'returns an array of reachable urls')
  })

  findReachableUrls(urls).then(function(result) {
    t.deepEqual(result, [
      'https://google.com',
      'https://github.com/OctoLinker/chrome-extension',
    ], 'supports promises')
  })

  findReachableUrls(urls[0]).then(function(result) {
    t.deepEqual(result, [
      'https://google.com',
    ], 'allows a single URL to be passed')
  })

  findReachableUrls(['https://github.com/nonexistent-url'], function(err, result) {
    t.deepEqual(result, [], 'returns an empty array if none of the given urls is reachable')
  })
})
