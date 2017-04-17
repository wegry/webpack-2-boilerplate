const webpack = require('webpack'),
      path = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  entry: {
      'app': './index.js'
  },

  output: {
    path: path.resolve('./public'),
    filename: '[name].js'
  },

  externals: [
    'window'
  ],

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ],
        })
      },
      {
        test: /\.(woff|woff2|svg|png|ttf|eot|otf)$/,
        loader: 'file-loader',
        query: {name: '[path][name]-[hash].[ext]', }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {cacheDirectory: true}
          },
          {
            loader: 'eslint-loader',
            query: {
              fix: true,
              cache: true
            },
          }
        ]
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      ignoreOrder: true
    }),
    new StyleLintPlugin({
      configFile: './css/.stylelintrc.yaml',
      syntax: 'scss',
      files: ['**/*.scss']
    }),
    // We don't need every locale moment provides (yet, at least)
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],

  performance: {hints: false},

  stats: {
    assets: true,
    assetsSort: 'size',
    cached: false,
    children: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    // chunksSort: 'size',
    errors: true,
    errorDetails: true,
    hash: true,
    modules: true,
    modulesSort: 'size',
    // publicPath: true,
    // reasons: true,
    source: false,
    timings: true,
    version: true,
    warnings: true
  }
}
