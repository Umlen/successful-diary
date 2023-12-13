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
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1',
        '^@Assets(.*)$': '<rootDir>/src/assets$1',
        '^@Components(.*)$': '<rootDir>/src/components$1',
        '^@Ui(.*)$': '<rootDir>/src/ui$1',
        '^@Data(.*)$': '<rootDir>/src/data$1',
        '^@Hooks(.*)$': '<rootDir>/src/hooks$1',
        '^@Utils(.*)$': '<rootDir>/src/utils$1',
        '^@Types(.*)$': '<rootDir>/src/types$1',
        '^@Style(.*)$': '<rootDir>/src/style$1',
      },
    },
  },
};
