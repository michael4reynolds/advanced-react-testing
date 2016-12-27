module.exports = wallaby => ({
  files: [
    'src/**/*.js*',
    '!src/**/__tests__/*.js*',
      { pattern: 'src/**/__tests__/**/*.snap' }],

  tests: ['src/**/__tests__/*.js*'],

  compilers: {
    'src/**/*.js*': wallaby.compilers.babel({}),
  },

  env: {
    type: 'node',
    runner: 'node',
  },

  testFramework: 'jest',
});
