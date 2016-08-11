/* eslint-env node, mocha */
'use strict';

const eslint = require('eslint');
const assert = require('assert');

describe('load config in eslint to check syntax', () => {
  const CLIEngine = eslint.CLIEngine;
  let cli;

  function assertCode(code) {
    const output = cli.executeOnText(code);

    assert.deepEqual(output.results[0].messages, []);
    assert.equal(output.errorCount, 0);
    assert.equal(output.warningCount, 0);
  }

  describe('with default configuration', () => {
    beforeEach(() => {
      cli = new CLIEngine({
        useEslintrc: false,
        configFile: 'index.js',
      });
    });

    it('should return no error', () => {
      const code = `
        var beer = 4;

        function bar(drink) { return drink * 4; }
        bar(beer);\n`;

      assertCode(code);
    });
  });

  describe('with backend configuration', () => {
    beforeEach(() => {
      cli = new CLIEngine({
        useEslintrc: false,
        configFile: 'lib/backend.js',
      });
    });

    it('should return no error', () => {
      const code = `
        'use strict';
        const beer = 4;

        function bar(drink) { return drink * 4; }
        bar(beer);\n`;

      assertCode(code);
    });
  });
  describe('with frontend configuration', () => {
    beforeEach(() => {
      cli = new CLIEngine({
        useEslintrc: false,
        configFile: 'lib/frontend.js',
      });
    });

    it('should return no error', () => {
      const code = `
        (function iife() {
          'use strict';
          const beer = 4;

          function bar(drink) { return drink * 4; }
          bar(beer);
        }());\n`;

      assertCode(code);
    });
  });
});
