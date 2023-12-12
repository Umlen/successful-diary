const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@': resolvePath('src'),
      '@Assets': resolvePath('src/assets'),
      '@Components': resolvePath('src/components'),
      '@Ui': resolvePath('src/components/ui'),
      '@Data': resolvePath('src/data'),
      '@Hooks': resolvePath('src/hooks'),
      '@Utils': resolvePath('src/utils'),
      '@Types': resolvePath('src/types'),
      '@Style': resolvePath('src/style'),
    },
  },
};
