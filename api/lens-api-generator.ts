import {
  createReadStream,
  createWriteStream,
  writeFileSync,
} from 'fs';
import {
  readdir,
} from 'fs/promises';

import { join } from 'path';

import multi from 'multistream';

import axios from 'axios';

import {
  LENS_API_DOCUMENTS_FILENAME,
  LENS_API_SCHEMA_FILENAME,
  USE_LENS_META_FILENAME,
} from '@use-lens/cli/lib/constants';

const TESTNET = process.env.TESTNET === 'true'
const TESTNET_QUERIES = ['create-profile.graphql'];

const lensApiGenerator = async () => {
  // await downloadFile('https://api.lens.dev', `./api/${LENS_API_SCHEMA_FILENAME}`)
  await generateLensApiDocuments();
  await updateUseLensJson();
};

const generateLensApiDocuments = async () => {
  console.log('generating documents!');
  // empty file
  writeFileSync(`./api/${LENS_API_DOCUMENTS_FILENAME}`, '');

  const fileNames = (await readdir('./api/documents')).filter((fileName) => TESTNET ? true : !TESTNET_QUERIES.includes(fileName));
  const fileStreams = fileNames.map(fileName => createReadStream(join('./api/documents', fileName)));
  const writeStream = createWriteStream(join('./api', LENS_API_DOCUMENTS_FILENAME));

  return new Promise((resolve, reject) => {
    // type mismatch
    // @ts-ignore
    new multi(fileStreams).pipe(writeStream);

    let error;
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
  });
};

const updateUseLensJson = async () => {
  writeFileSync(`./api/${USE_LENS_META_FILENAME}`, JSON.stringify({
    version: 'latest',
    type: 'semi-manual',
    lastUpdate: new Date().toISOString()
  }));
};

const downloadLensSchemaFile = async (downloadUrl: string, filePath: string) => {
  // todo: down load with POST from https://api.lens.dev/assets/graphql and Introspection Query
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

// run generation:
lensApiGenerator().then(() => console.log('API has been generated successfully!')).catch(e => {
  console.error('Error during API generation', e);
  throw new Error(e);
});
