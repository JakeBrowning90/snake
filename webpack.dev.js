const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");

// **To track errors and automatically refresh after edits**
module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
});