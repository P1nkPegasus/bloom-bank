// Top-level ESLint flat config used for project-wide settings such as ignored files.
// This file adopts the new `ignores` property recommended by ESLint to replace
// the legacy `.eslintignore` which now emits a migration warning.
module.exports = [
  {
    ignores: [
      'node_modules/',
      'dist/',
      'public/',
      '.vite/',
      'build/',
      '*.min.js'
    ]
  }
];
