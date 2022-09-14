#! /usr/bin/env node
import { Command } from 'commander'
import { generate } from './actions/generate'
import { version } from '../package.json'

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
