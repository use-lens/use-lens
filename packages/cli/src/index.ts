#! /usr/bin/env node

import { Command, Argument } from 'commander'
const version = require('../package.json').version
import { generate } from './actions/generate'
import { AVAILABLE_LIBRARIES } from './constants';

const program = new Command();

program
  .name('use-lens')
  .description('CLI to @use-lens')
  .version(version);

program
  .command('generate')
  .addArgument(new Argument('<library>', 'project type').choices(AVAILABLE_LIBRARIES))
  .description('Lens API generation with graphql-codegen')
  .action(generate)

program.parse();
