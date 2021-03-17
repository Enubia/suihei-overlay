const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~/assets': path.resolve(__dirname, './src/assets')
    }
  }
};
