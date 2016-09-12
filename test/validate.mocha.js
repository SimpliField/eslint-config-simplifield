/* eslint-env node, mocha */
/* eslint no-magic-numbers:0 */
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
        var cost = 2.5;

        function bar(drink) { return drink * cost; }
        bar(beer);\n`;

      assertCode(code);
    });

    it('should disallow .only on describe', () => {
      const code = `
        var describe;

        describe.only();\n`;

      const output = cli.executeOnText(code);

      assert.deepEqual(output.results[0].messages, [
        {
          column: 9,
          line: 4,
          message: '\'describe.only\' is restricted from being used. ' +
            'Please avoid to commit with an .only',
          nodeType: 'MemberExpression',
          ruleId: 'no-restricted-properties',
          severity: 1,
          source: '        describe.only();',
        },
      ]);
      assert.equal(output.errorCount, 0);
      assert.equal(output.warningCount, 1);
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
        const cost = 2.5;

        function bar(drink) { return drink * cost; }
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
          const cost = 2.5;

          function bar(drink) { return drink * cost; }
          bar(beer);
        }());\n`;

      assertCode(code);
    });
  });
});
