import chalk from 'chalk';
import {
  createWriteStream,
  createReadStream
} from 'fs';
import path from 'path';
import { exec } from 'child_process';
import {
  LENS_API_DOCUMENTS_FILENAME,
  LENS_API_SCHEMA_FILENAME,
  USE_LENS_META_FILENAME,
  GRAPHQL_CODEGEN_FILENAME
} from '../constants';

const apiPath = path.join(__dirname, '..', '..', 'api');

export const generate = async (library: string) => {
  console.log('adding graphql-codegen config...');
  await loadFile(`${library}.yml`, `./${GRAPHQL_CODEGEN_FILENAME}`)

  console.log('adding Lens API files...');
  await Promise.all([
    loadFile(LENS_API_DOCUMENTS_FILENAME, `./${LENS_API_DOCUMENTS_FILENAME}`),
    loadFile(LENS_API_SCHEMA_FILENAME, `./${LENS_API_SCHEMA_FILENAME}`),
    loadFile(USE_LENS_META_FILENAME, `./${USE_LENS_META_FILENAME}`)
  ])

  console.log('executing graphql-codegen...');
  await executeCodegen().catch(e => {
    console.error('Error in [executeCodegen]');
    console.error(e);
    throw new Error(e);
  });

  console.log('done!');
};

const loadFile = async (loadName: string, filePath: string) => {
  const writeStream = createWriteStream(filePath);
  const readStream = createReadStream(path.join(apiPath, loadName));

  await new Promise((resolve, reject) => {
    let error: Error;

    readStream.pipe(writeStream)
      .on('close', function () {
        if (!error) {
          resolve(true)
        }
      })
      .on('error', (err) => {
        error = err
        console.error(error);
        reject(err)
      });
  });
};

const executeCodegen = async () => {
  const cmd = 'graphql-codegen';

  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};
