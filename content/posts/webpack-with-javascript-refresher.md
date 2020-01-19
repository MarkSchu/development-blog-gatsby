---
title: Webpack with JavaScript Refresher
date: 2020-01-13T17:19:22.832Z
template: "post"
draft: false
slug: webpack-with-javascript-refresher
category: "JavaScript"
description: "A quick explanation of Webpack to jog your memory."
---

Webpack bundles assets together. There are many kinds of assets. This refresher is about JavaScript.

Webpack takes all of the JavaScript files that define your app's front-end, resolves module dependencies, minimizes the code, and bundles it into a single file. All your front-end JS code gets loaded into the browser via that single file.

There are a few essential concepts.

* Source Folder
* Entry Point File
* Bundle File
* Distribution Folder
* Webpack Config File
* Build Command

The **Source Folder** holds the JavaScript that you write to run your app in the browser. Webpack looks at these files and bundles them together with the JavaScript in `node_modules` into a single file that the browser loads. The folder is often called `src`, but you can all it whatever you want. You are allowed and encouraged to use import statements like `import * from './some/file'`. Webpack reads import statements and automaticlly resolves dependences.

The **Entry Point JavaScript File** contains the code that's executed first. Typically, it's named `index.js`.

The **Bundle File** is the JavaScript file that Webpack creates. It includes all of your JS code. You can name it whatever you want, like `main.js`. To get the code in the browser, all you need to do is add a script tag that references the bundle, like `<script src="/path/to/main.js"></script>`.

The **Distribution Folder** contains the bundle file. When Webpack usage is more complicated, the distribution folder contains other kinds of things too.

The **Webpack Config File** is where you define the entry point file and the distribution folder. In more complicated situations, it contains a lot of other othings. Here is a simple example:

```javascript
// webpack.config.js

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
```

The **Build Command** is how you ask Webpack to make the bundle file. There are a number of ways to create/run a build command. One simple option is to add a build command to the scripts section of your `package.json` file.

```json
{
  "name": "webpack-refresher",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "build": "webpack",
  "author": "",
  "license": "ISC",
  "dependencies": {
    "lodash": "4.17.15"
  },
  "devDependencies": {
    "webpack": "^4.20.2",
    "webpack-cli": "^3.1.2"
  }
}
```

The `webpack-cli` dependency provides the `webpack` command that's called via the `npm run build` script.
