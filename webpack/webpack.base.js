var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DirectoryDefaultFilePlugin = require("./plugins/DirectoryDefaultFilePlugin.js");

// The root directory of Blanketwarriors.com
var baseDir = path.resolve(__dirname, "..");

var defaultConfiguration = {
  baseDir: baseDir, // Needed because our webpack files are in a folder
  resolve: {
    // Using this we can import `Button`, rather than `Button.jsx`
    extensions: ["", ".js", ".jsx", ".css", ".scss"],

    // Shortcuts to folders.  We can start an import path from `app`, `test`, and `public`.
    alias: {
      client: path.join(baseDir, "app/client"),
      server: path.join(baseDir, "app/server"),
      shared: path.join(baseDir, "app/shared"),
      vendor: path.join(baseDir, "app/vendor"),
      public: path.join(baseDir, "public")
    }
  },

  module: {
    // Run ESLint before our application starts.
    preLoaders: [{ test: /.jsx?$/, loader: "eslint", exclude: [/node_modules/, /vendor/] }],

    // Loaders help us by telling webpack what and how we should compile
    loaders: [
      {
        test: /\.jsx?$/, // Find all files that end with `.js` and `.jsx`
        loader: "babel", // Compile all of these with Babel
        exclude: [/node_modules/, /vendor/] // `node_modules` should already be compiled
      },
      {
        test: /\.scss$/, // Find all files that end with `.scss`
        loader: ExtractTextPlugin.extract("css!sass"), // Compile the styles!
        exclude: /node_modules/
      },

      // This one is helping one of our electron dependencies compile
      // We don't have an `exclude` property. We want it to run for all json requires
      { test: /\.json$/, loader: "json" }
    ]
  },

  plugins: [
    // Extracts our css and separates it from the javascript
    new ExtractTextPlugin("styles.css", { allChunks: true }),

    // Resolves files with the same name as the containing folder
    new webpack.ResolverPlugin([ new DirectoryDefaultFilePlugin() ])
  ],

  // Tells eslint where our config file is
  eslint: { configFile: path.join(baseDir, ".eslintrc.js") }
};

// Depending on the environment we are running in, we need different properties
// The environment is set in our `package.json`, during the use of npm scripts
switch(process.env["NODE_ENV"]) {
  case "production":
    // Shrinks our code for production to reduce download size.
    defaultConfiguration.plugins = defaultConfiguration.plugins.concat([
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]);
    break;

  case "development":
  default:
}

module.exports = defaultConfiguration;
