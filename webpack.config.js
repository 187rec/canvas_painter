const path = require('path');

module.exports = {
  entry: './main',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};