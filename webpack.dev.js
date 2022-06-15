import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import FileIncludeWebpackPlugin from 'file-include-webpack-plugin';

export default {
  mode: 'development',
  entry: {
    main: ['./src/scripts/index.js', './src/styles/main.scss'],
    apartment: ['./src/scripts/apartment.js', './src/styles/apartment.scss'],
    catalog: './src/styles/catalog.scss'
  },
  output: {
    filename: 'js/[name].bundle.js'
  },
  devServer: {
    static: path.resolve('src'),
    historyApiFallback: true,
    compress: true,
    port: 3000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.woff2$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new FileIncludeWebpackPlugin({
      source: './src/html/'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/html/index.html'
    }),

    new MiniCssExtractPlugin({
      linkType: 'text/css',
      filename: 'css/[name].styles.css'
    })
  ]
};
