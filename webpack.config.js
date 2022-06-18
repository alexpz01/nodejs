const path = require("path")
const css = require("mini-css-extract-plugin")
const clean = require("clean-webpack-plugin").CleanWebpackPlugin

const scssRules = {
  test: /\.scss$/i,
  use: [css.loader,
    "css-loader",
    "sass-loader"
  ]
}


module.exports = {
  entry: './src/script/start.js',
  output: {
    path: path.resolve(__dirname, 'public/dist/script'),
    filename: 'bundle.js',
  },
  module : {
    rules : [scssRules]
  },
  plugins : [new css({filename: "../style/bundle.css"})]
};