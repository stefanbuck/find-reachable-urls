# find-reachable-urls [![Build Status](https://travis-ci.org/stefanbuck/find-reachable-urls.svg?branch=master)](https://travis-ci.org/stefanbuck/find-reachable-urls)

Passes back all URLs which respond with status code 200.

## Installation

```sh
npm install find-reachable-urls --save
```

## Usage

```js
const findReachableUrls = require('find-reachable-urls')
const urls = [
  'https://google.com', // 200
  'https://github.com/nonexistent-url', // 404
  'https://github.com/OctoLinker/chrome-extension', // 301
]

findReachableUrls(urls)
  .then(function(result) {
    console.log(result)
    // ['https://google.com', 'https://github.com/OctoLinker/chrome-extension']
  })
  .catch(function(err) {
    // handle error
  })
```

## Tests

```sh
npm install
npm test
```

## Related

- [heads](https://github.com/zeke/heads): Make parallel HEAD requests for an array of URLs and get back their HTTP status codes.

## License

MIT
