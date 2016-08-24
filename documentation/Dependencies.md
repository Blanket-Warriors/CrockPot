Dependencies
============
These are the main dependencies of Crockpot, and if you intend to use this repository to learn, these are the technologies you should be focusing on. Have fun and good luck!

- #### Express
[Express](http://expressjs.com/) helps us easily set up a server. It's basically an abstraction over Node.js server methods.

- #### Lodash
[Lodash](https://lodash.com/docs) is a very solid and fast library of utility functions. Their documentation is fantastic, and we supply links in our readmes whenever possible.

- #### React
[React](https://facebook.github.io/react/) helps us structure the views of our application.

- #### React-DOM
Starting at React v.0.14, Facebook split out React's DOM functionality into [React-DOM](https://facebook.github.io/react/). This probably had to do with the fact that people were using React in all sorts of different contexts, like [React Native](https://facebook.github.io/react-native/), [React Canvas](https://github.com/Flipboard/react-canvas), and other custom translations. However, we're just making a simple web app, so all this means is that we use the React-DOM module where we attach our React components to a node on the HTML DOM.

- #### React-Router
[React-Router](https://github.com/reactjs/react-router) is the cleanest router available for React. It helps us keep track of all our container views.

DevDependencies
===============
These are dependencies that are not used much in the actual application, but facilitate it in building and using the application. This notably includes Electron, our compilation dependencies, and testing dependencies.

- #### Babel-Core
We use [Babel](https://babeljs.io/) to compile our Javascript with new features into plain old ES5. This helps us maintain compatibility with the Chrome runtime, while simultaneously letting us use all the new Javascript features. All of our Babel settings are found in our `package.json`.

- #### Babel-ESLint
Lets our ESLint understand our Babel ways. Basically, ESLint is just a platform, and [Babel-ESLint](https://github.com/babel/babel-eslint) tells ESLint what to look for.

- #### Babel-Loader
Lets us use Babel with Webpack. Basically, Webpack runs Babel whenever it sees a `.js` or `.jsx` module. [Babel-Loader](https://github.com/babel/babel-loader) just tells Webpack how to use Babel. Yay loaders.

- #### Babel-plugin-add-module-exports
[Babel-plugin-add-module-exports](https://github.com/59naga/babel-plugin-add-module-exports) is an unfortunate co-dependency of [inject-loader](https://github.com/plasticine/inject-loader). It might be worth it to send a PR to them in order to fix that as well...

- #### Babel-preset-es2015
[Babel-preset-es2015](http://babeljs.io/docs/plugins/preset-es2015/) makes sure we have all the standart es2015 features like arrow fun-ctions, lets, consts, etc.

- #### Babel-preset-react
[Babel-preset-react](http://babeljs.io/docs/plugins/preset-react/) is used by Babel to compile our JSX features.

- #### Babel-preset-stage-0
[Babel-preset-stage-0](https://babeljs.io/docs/plugins/preset-stage-0/) lets us use the very cutting edge Javascript. So a bit more liable to change, but lets us use the cool shit.

- #### Browser-Sync

- #### Browser-Sync-Webpack-Plugin

- #### Chai
[Chai](https://duckduckgo.com/?q=chai+test) is an assertion library (gives us all our `expects`, `asserts`, etc). We use it for testing, and it works. Not much to say here.

- #### CSS-Loader
[CSS-Loader](https://github.com/MoOx/eslint-loader) is how we integrate our CSS compilation into our Webpack process.

- #### ESLint
[ESLint](http://eslint.org/) is a great tool that catches our mistakes before we run our stuff. We integrate it with our Webpack process in order to catch mistakes before we compile all of our code. It also helps us keep our coding-styles in sync, so it's easier to read through our repository. You'll also notice our .eslintignore and .eslintrc.js files, which are simply configuration details for ESLint.

- #### ESLint-Loader
[ESLint-Loader](https://github.com/MoOx/eslint-loader) is a Webpack loader for ESLint. It's how we integrate ESLint with our Webpack processes.

- #### ESLint-Plugin-React
[ESLint-Plugin-React](https://github.com/yannickcr/eslint-plugin-react) gives us special React-inspired rules, and lets us check our JSX with ESLint (otherwise it'll totes freak out as soon as it sees the first `<myComponent />`).

- #### Extract-Text-Webpack-Plugin
[Extract-Text-Webpack-Plugin](https://github.com/webpack/extract-text-webpack-plugin) Separates our compiled stylesheet and Javascript files. It will give us a slight performance boost as the amount of stylesheets grows, as we don't need to wait for the Javascript to run in order to use our styles. We might actually just move this into the production build rather than have it in both the production and development builds, since it does add a little time to our compilation process and blocks [hot module replacement](https://webpack.github.io/docs/hot-module-replacement.html) from happening.

- #### Inject-Loader
[Inject-Loader](https://github.com/plasticine/inject-loader) is for testing that lets us inject modules into our modules to write unit tests where we would want to mock things inside our module. Basically, if we do this, then we can say "Oh. This module failed", instead of "Oh. Either this module or any one of its dependencies failed".

- #### JSON-Loader

- #### Node-Sass
[Node-Sass](https://github.com/sass/node-sass) lets us use Sass by compiling our `.scss` files. Sass is dabes. Use Sass.

- #### React-Addons-Test-Utils
[React-Addons-Test-Utils](https://facebook.github.io/react/docs/test-utils.html) is a library of utilities for testing React components. This is a dependency for [Enzyme](http://airbnb.io/enzyme/), which is why we have it.  However, we don't use this dependency much directly, as we prefer the further-abstracted tool of Enzyme.

- #### Sass-Loader
[Sass-Loader](https://github.com/jtangelder/sass-loader) integrates our Node-Sass compilation to run inside Webpack. Aww yeee.

- #### Webpack
[Webpack](https://webpack.github.io/) is a tool to help us compile and package our Javascript, and represents the centerpiece of our build process. It allows us to use [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html), [SASS](http://sass-lang.com/) and cool new Javascript features via [Babel](https://babeljs.io/) by taking code we write in those technologies, parsing them, and spitting our plain old CSS and EcmaScript5. The [React Webpack Cookbook](https://christianalfoni.github.io/react-webpack-cookbook/index.html) is a pretty good place to start getting used to using Webpack with React.

- #### Webpack-dev-server
[Webpack-Dev-Server](https://github.com/webpack/webpack-dev-server) is some cool webpack middleware that runs a development server, automatically updates when our code changes. Means we can check our work faster. We are also working on implementing [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html), but we're not quite there yet.
