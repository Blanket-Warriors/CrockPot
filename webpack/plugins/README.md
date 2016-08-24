Plugins
=======

Directory Default File Plugin
-----------------------------
By default, the resolution path for webpack is to `index.js`. This plugin sets that default resolution path to the same name as the containing folder. For example...

```js
import app from `app/components/Button`;
```

now will first look for a file in:

```js
import app from `app/components/Button/Button.js`;
```

This plugin is almost directly copied from [Spalger's github](https://github.com/spalger/webpack-directory-name-as-main). We made some slight modifications to fix some issues we were having.

#### How to Use
```
const webpack = require("webpack");
const DirectoryDefaultFilePlugin = require("DirectoryDefaultFilePlugin");

var webpackConfig = {
  ...
  plugins: [
    new webpack.ResolverPlugin([ new DirectoryDefaultFilePlugin() ])
  ]
  ...
};
```

Get Node Externals
------------------
This plugin tells Webpack which modules we shouldn't bundle (read: backend dependencies). The big issue with this is binary dependencies. Since these aren't Javascript, Webpack kinda throws a fit and can't figure what it should do. So we don't compile them.

Also, we directly specify these dependencies as "commonjs" so that Webpack will `require` these, instead of leaving empty variables for globals, which is its default behavior.

This is code taken from Jake Longster's blog post [Backend Apps with Webpack](http://jlongster.com/Backend-Apps-with-Webpack--Part-I), so I'd encourage you to check that out to learn more.

#### How to Use
```
const getNodeExternals = require("getNodeExternals");

var webpackConfig = {
  ...
  externals: getNodeExternals(/*Path to my Node Modules*/)
  ...
};
```
