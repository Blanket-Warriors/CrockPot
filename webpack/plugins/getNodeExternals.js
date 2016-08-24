const fs = require("fs");
const path = require("path");

module.exports = function getNodeExternals(nodeModulesDirectory) {
  var nodeModules = {};

  fs.readdirSync(nodeModulesDirectory)
    .filter(function ignoreBinaryDirs(filename) {
      const ignoredFiles = [".bin"];
      return ignoredFiles.indexOf(filename) !== -1;
    })
    .forEach(function specifyCommonjsFormat(filename) {
      nodeModules[filename] = "commonjs " + filename;
    });

  return nodeModules;
};
