var log = require('bestikk-log');
var Builder = require('./builder.js');
var builder = new Builder();

var args = process.argv.slice(2);
var runner = args[0];

if (typeof runner === 'undefined') {
  log.error('Runner is undefined, please specify a runner \'npm run benchmark [node|phantomjs|jjs]\'');
  process.exit(9);
}

if (runner !== 'node' && runner !== 'phantomjs' && runner !== 'jjs') {
  log.error('Runner must be one of: node, phantomjs or jjs. \'npm run benchmark [node|phantomjs|jjs]\'');
  process.exit(9);
}

builder.benchmark(runner);
