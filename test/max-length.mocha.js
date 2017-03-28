/* eslint-env node, mocha */
/* eslint no-magic-numbers:0 no-template-curly-in-string:0 */
'use strict';

const eslint = require('eslint');
const assert = require('assert');

describe('max-length rule', () => {
  const CLIEngine = eslint.CLIEngine;
  let cli;

  function assertCode(code) {
    const output = cli.executeOnText(code);

    assert.deepEqual(output.results[0].messages, []);
    assert.equal(output.errorCount, 0);
    assert.equal(output.warningCount, 0);
  }

  describe('with frontend configuration', () => {
    beforeEach(() => {
      cli = new CLIEngine({
        useEslintrc: false,
        configFile: 'lib/frontend.js',
      });
    });

    it('should ignore imports', () => {
      const code = `
        import unknownModule from './${'really/'.repeat(9)}/long/module';

        var beer = 4;

        unknownModule.bar(beer);\n`;

      assertCode(code);
    });

    it('should ignore imports without indent', () => {
      const code = `
import unknownModule from './modal-result-edit/components/sf-report-edit-field/sf-report-edit-field.component';

var beer = 4;

unknownModule.bar(beer);\n`;

      assertCode(code);
    });


    it('should work otherwise', () => {
      const code = `
        const aReallyLongUrl = 'https://www.google.fr/?q=${'really,'.repeat(8)}long,query';
        const getLength = str => str.length;

        getLength(aReallyLongUrl);\n`;

      const output = cli.executeOnText(code);

      assert.deepEqual(
        output.results[0].messages[0].ruleId,
        'max-len'
      );
    });

  });

});
