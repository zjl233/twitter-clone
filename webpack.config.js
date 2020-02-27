// make webstorm intelligen work
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.join(__dirname, 'client'),
    },
  },
};
