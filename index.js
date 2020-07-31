var fs = require('fs');

var supportedFileExtensions = ['.cyp', '.cypher', '.cql'];

function readCypherFileSync(module, filename) {
  module.exports = fs.readFileSync(filename, {encoding: 'utf8'});
}

supportedFileExtensions.forEach(function(extension) {
  require.extensions[extension] = readCypherFileSync;
});

exports.supportedFileExtensions = supportedFileExtensions;
