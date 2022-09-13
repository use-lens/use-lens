#! /usr/bin/env node
import { Command } from 'commander'
import { generate } from './actions/generate'
const version = require('./package.json').version

const program = new Command();

program
  .name('use-lens')
  .description('CLI to @use-lens')
  .version(version);

program
  .command('generate <library>')
  .description('Lens API generation')
  .action(generate)

program.parse();
