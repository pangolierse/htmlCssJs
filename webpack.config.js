const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 8080,
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template:'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  module:{
    rules:[
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.less/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test:/\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name:'[path][name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      }
    ]
  }
};