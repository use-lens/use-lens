import chalk from 'chalk';
import axios from 'axios';
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

const cliPath = path.join(__dirname, '..', '..');

export const generate = async (library: string) => {
  console.log('creating codegen.yml file...');
  await downloadFile(getRawCodegenUrl(library), `./${GRAPHQL_CODEGEN_FILENAME}`).catch(e => {
    console.error('Error in [downloadFile]');
    console.error(e);
    throw new Error(e);
  });

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

const getRawCodegenUrl = (library: string) => `https://raw.githubusercontent.com/andriishupta/use-lens/main/packages/${library}/codegen.yml`;

const loadFile = async (loadName: string, filePath: string) => {
  const writeStream = createWriteStream(filePath);
  const readStream = createReadStream(path.join(cliPath, loadName));

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

const downloadFile = async (downloadUrl: string, filePath: string) => {
  const writeStream = createWriteStream(filePath);

  await axios.get(downloadUrl, { responseType: 'stream' }).then(response =>
    new Promise((resolve, reject) => {
      let error: Error;

      response.data.pipe(writeStream);

      writeStream.on('error', err => {
        error = err;
        writeStream.close();
        reject(err);
      });

      writeStream.on('close', () => {
        if (!error) {
          resolve(true);
        }
      });
    })
  );
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
