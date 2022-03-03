const path = require('path');

module.exports = {
  mode: 'production',
  entry: './lib/index.js', // 单入口
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname,'dist'),
    libraryTarget: 'commonjs2',
  },
};
