const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, './src/server.ts'),
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }]
  },
  plugins: []
};