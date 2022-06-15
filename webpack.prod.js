import TerserPlugin from 'terser-webpack-plugin';

export default {
  mode: 'production',
  entry: {
    main: './src/scripts/index.js',
    apartment: './src/scripts/apartment.js'
  },
  devtool: 'cheap-source-map',
  optimization: {
    minimize: true,
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          },
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
