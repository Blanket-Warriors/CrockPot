var path = require("path");
var webpack = require("webpack");
var config = require("./webpack.base.js");
var getNodeExternals = require("./plugins/getNodeExternals.js");
var baseDir = config.baseDir;

if(process.env["NODE_ENV"] == "development") {
  Object.assign(config, { devtool: "source-map" });

  var sourceMapBanner = "require('source-map-support').install();";
  config.plugins = config.plugins.concat([
    new webpack.BannerPlugin(sourceMapBanner, {
      entryOnly: false, // Add this banner to the top of every generated file
      raw: true // Prepend this text without making any changes
    })
  ]);
}

module.exports = Object.assign(config, {
  entry: path.join(baseDir, "app/server/server.jsx"),

  output: {
    path: path.join(baseDir, "public"),
    publicPath: "/",
    filename: "server.js"
  },

  target: "node",

  externals: getNodeExternals(path.join(baseDir, "node_modules")),

  // __dirname should refer to the pre-built location
  node: {
    __dirname: true
  }
});
