var requireCypher = require('./../index.js');
var fs = require('fs');

// require-cypher allows you to use node's `require()` method to get the
// content of Cypher files (having the extension .cql, .cyp, or .cypher).
// The content will be cached in memory, so the file will only be read once.

/** Get the content of the file at the specified path, and log it; or log an error instead. */
function getFileContent(filePath) {
  try {
    var content = require(filePath);
    console.log("== Contents of", filePath, ":\n" + content);
  } catch(err) {
    console.error(err);
  }
}

/** Contains an array of the paths of the Cypher files in the same directory as this file. */
var cypherFilePaths = fs
  .readdirSync(__dirname)
  .filter(function(filename) {
    return !!requireCypher.supportedFileExtensions.find(function(ext) {
      return filename.endsWith(ext);
    });})
  .map(function(filename) {return './' + filename;});

// Should successfully log the content of each Cypher file
cypherFilePaths.forEach(getFileContent);

// These two attempts should log errors.
console.error("== Attempt to get ./doesNotExist.cql is expected to fail because the file does not exist");
getFileContent("./doesNotExist.cql");
console.error("\n== Attempt to get ./unsupportedExtension.txt is expected to fail because the file does not have a supported extension");
getFileContent("./unsupportedExtension.txt");

