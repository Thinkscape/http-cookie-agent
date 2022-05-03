module.exports = {
  extends: [require.resolve('@3846masa/configs/eslint')],
  overrides: [
    {
      files: ['examples/**/*'],
      rules: {
        'import/no-unresolved': [
          'error',
          {
            ignore: ['ava', 'got', 'http-cookie-agent'],
          },
        ],
      },
    },
  ],
  rules: {
    'import/no-unresolved': [
      'error',
      {
        ignore: ['ava', 'got'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
