var config = require("./webpack.base.js");
var path = require("path");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");
var baseDir = config.baseDir;

if(process.env["NODE_ENV"] == "development") {
  config.plugins = config.plugins.concat([
    new BrowserSyncPlugin({
      proxy: "localhost:2000"
    })
  ]);
}

module.exports = Object.assign(config, {
  entry: path.join(baseDir, "app/client/client.jsx"),

  target: "web",

  output: {
    path: path.join(baseDir, "public", "build"),
    publicPath: "/build/",
    filename: "client.js"
  }
});
