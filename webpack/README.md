Webpack
==========
[Webpack](https://webpack.github.io/) is a utility we use for taking all of our modules, running our [compilers](https://en.wikipedia.org/wiki/Compiler) on them, and merging them into a javascript file and a css file. There are a few reasonings behind using Webpack and compilers.

1. A separation of readability and performance. This ranges from using new javascript features and Sass, to improving performance by removing the impact of whitespace, comments, and long variable names.

2. Modularity. It's nice to be able to have all of our concerns in different files and folders without importing a crazy amount of javascript files in our .html files.

How it works
------------
We have a few different configurations that do different things, but they all start with `webpack.base.js`.

#### `webpack.base.js`
This is the bulk of our Webpack configuration. Webpack has a lot of settings, so we fully commented it to keep track of it all.

#### Development Configuration
This build runs a server. Using devServer lets webpack automatically refresh our browser when our code changes, so that we never have to click refresh ever again.  Waow!

#### Production Configuration
This build Runs a few optimizations to shrink our code. Namely it minifies our code, gives shorter names to code that's used more often, and removes duplicate code (namely from dependencies). These make compiling take longer, but decrease code size.  Basically perfect for production!

#### `plugins`
This folder holds any plugins that we have committed locally. Mostly, this is because a lot of webpack plugins are rather small in footprint and don't change much. It gives us a little more control over when these dependencies change, so that an update to one doesn't break our build process.
