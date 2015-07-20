#! /usr/bin/env node

var fs = require('fs');
var path = require('path');

var LINT_FILE = '.eslintrc';

var projectLintConfig = path.join(process.cwd(), LINT_FILE);
var sfLintConfig = path.join(__dirname, '..', LINT_FILE);

// Reading old eslint content
var oldContent = fs.readFileSync(projectLintConfig, 'utf-8');

// Remove automatically generated contents
oldContent = oldContent.split('\r?\n\r?\n\r?\n')[0];

// Put it to the project file
var outputStream = fs.createWriteStream(projectLintConfig);
outputStream.write(oldContent);

fs.createReadStream(sfLintConfig)
  .pipe(outputStream);

