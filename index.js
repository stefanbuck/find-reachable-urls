const heads = require('heads')
const pify = require('pify')
const async = require('async')

function findReachableUrls(urls, options, callback) {
  options = options || {};

  if (typeof options === 'function') {
    callback = options;
  }

  if (typeof urls === 'string') {
    urls = [urls]
  }

  if (options.firstMatch) {
    getFirst(urls, callback);
    return;
  }

  getAll(urls, callback);
}

function getFirst(urls, callback) {
  const testFn = (code) => code !== 200;

  let url;
  const doRequest = (callback) => {
    url = urls.shift();
    heads(url, callback);
  }

  async.doWhilst(doRequest, testFn, () => {
    callback(null, url);
  });
}

function getAll(urls, callback) {
  const result = [];

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
