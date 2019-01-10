const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry:  './src/main/app/js/index.js',
  devtool: 'sourcemaps',
  cache: true,
  mode: 'development',
  output: {
    path: __dirname,
    filename: './src/main/resources/static/built/bundle.js'
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, '.'),
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }]
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader','sass-loader']
      }
    ]
  },
  plugins: [
      new MiniCSSExtractPlugin({
        filename: "./src/main/resources/static/built/[name].css",
        allChunks: true,
      }),
  ],
};