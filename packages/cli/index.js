#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var generate_1 = require("./src/generate");
var version = require('./package.json').version;
var program = new commander_1.Command();
program
    .name('use-lens')
    .description('CLI to @use-lens')
    .version(version);
program
    .command('generate <library>')
    .description('Lens API generation')
    .action(generate_1.generate);
program.parse();
