const path = require("path");
// **If using HtmlWebpackPlugin, install --save-dev html-webpack-plugin**
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  // **If using HtmlWebpackPlugin**
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],

  // **Include modules and install dev dependecies as needed**
  module: {
    rules: [
      // **For handling style sheets**
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      //   **For handling imgs and other HTML elements**
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      // **For handling local image files to be referenced in JS**
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
