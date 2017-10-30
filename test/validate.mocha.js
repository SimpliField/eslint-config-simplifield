/* eslint-env node, mocha */
/* eslint no-magic-numbers:0 no-template-curly-in-string:0 */
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

    it('should allow to declare function with fat arrows', () => {
      const code =
        'const hello = name => `hello ${name}`;\n\n' + "hello('seb');\n";

      assertCode(code);
    });

    it('should disallow .only on describe', () => {
      const code = `
var describe;

describe.only();\n`;

      const output = cli.executeOnText(code);

      assert.deepEqual(output.results[0].messages, [
        {
          column: 1,
          line: 4,
          endColumn: 14,
          endLine: 4,
          message:
            "'describe.only' is restricted from being used. " +
            'Using describe.only is not allowed',
          nodeType: 'MemberExpression',
          ruleId: 'no-restricted-properties',
          severity: 2,
          source: 'describe.only();',
        },
      ]);
      assert.equal(output.errorCount, 1);
      assert.equal(output.warningCount, 0);
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
  const beer = 4;
  const cost = 2.5;

  function bar(drink) { return drink * cost; }
  bar(beer);
}());\n`;

      assertCode(code);
    });
  });
});
