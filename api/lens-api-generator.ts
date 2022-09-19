require('dotenv').config({ path: './lens-api-examples/.env' })

import {
  createWriteStream,
  writeFileSync,
} from 'fs';
import { appendFile } from 'fs/promises';

import axios from 'axios';

import {
  LENS_API_DOCUMENTS_FILENAME,
  LENS_API_SCHEMA_FILENAME
} from '@use-lens/cli/lib/constants';

import { LENS_API_DOCUMENTS } from './lens-api-documents';

const lensApiGenerator = async () => {
  // await downloadFile('https://api.lens.dev', `./api/${LENS_API_SCHEMA_FILENAME}`)
  await generateLensApiDocuments();
};

const generateLensApiDocuments = async () => {
  console.log('generating documents!')

  writeFileSync(`./api/${LENS_API_DOCUMENTS_FILENAME}`, '');

  for (const documentKey of Object.keys(LENS_API_DOCUMENTS)) {
    const documentName = snake2Pascal(documentKey);
    const documentValue = LENS_API_DOCUMENTS[documentKey]

    const documentValueWithName = documentValue
      .replace('query', `query ${documentName}`)
      .replace('mutation', `mutation ${documentName}`);

    await appendFile(`./api/${LENS_API_DOCUMENTS_FILENAME}`, `${documentValueWithName}\n`)
  }

  console.log('generation finished!')
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

const snake2Pascal = (str: any) => {
  str = str.toLowerCase();
  str = str.split('_');
  for (let i = 0; i < str.length; i++) {
    str[ i ] = str[ i ].slice(0, 1).toUpperCase() + str[ i ].slice(1, str[ i ].length);
  }
  return str.join('');
};

// run generation:
lensApiGenerator().then(() => console.log('API has been generated successfully!')).catch(e => {
  console.error('Error during API generation', e);
  throw new Error(e);
});
