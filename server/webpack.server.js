const path = require("path");
const merge = require("webpack-merge");
const webpackNodeExternals = require("webpack-node-externals");

const baseConfig = require("./webpack.base");

const config = {
  // Inform webpack that we're building a bundle for node js rather than for the browser
  target: "node",

  // tell webpack the root file of our server application
  entry: "./src/index.js",

  // tell webpack where to put the output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  // not bundle node_modules
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
