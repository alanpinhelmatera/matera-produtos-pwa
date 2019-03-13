const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/main.js'
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
      favicon: path.resolve('src/favicon.ico'),
      minify: {
        minifyCSS: true,
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackPwaManifest({
      name: 'Matera Produtos',
      short_name: 'MProdutos',
      description: 'Webapp de exemplo para treinamento interno de PWA.',
      theme_color: '#185ea2',
      background_color: '#185ea2',
      display: 'standalone',
      scope: '/matera-produtos-pwa/',
      start_url: '/matera-produtos-pwa/',
      lang: 'pt-BR',
      orientation: 'any',
      icons: [
        {
          src: path.resolve('src/assets/images/favicon-512x512.png'),
          size: '512x512'
        }
      ]
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://spreadsheets.google.com/feeds/list/'),
          handler: 'StaleWhileRevalidate'
        }
      ]
    })
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(html)$/,
        use: ['html-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
