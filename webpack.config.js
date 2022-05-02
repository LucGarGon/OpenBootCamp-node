const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  entry: {
    index: '.index.ts'
  },
  output: {
    path: path.join(__dirname, '/disk'),
    filename: '[name].js ',
    publicPath: '/'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exlude: '/node_modules/'
      }
    ]
  },
  resolve: {
    extendsions: ['.tsx', '.ts', '.js']
  },
  externals: [nodeExternals()]
}
