// # How to generate Documents
//
// - take the latest API
// - load gitsubmodule `api-examples`
// - go through folder `src`
// - take all files except /abi
// - take out Private variable
// - append to lens-api.document

import {
  createWriteStream,
  existsSync
} from 'fs';
import axios from 'axios';

import { LENS_API_SCHEMA_FILENAME } from '@use-lens/cli/lib/constants';

const lensApiGenerator = async () => {
  // await downloadFile('https://api.lens.dev', `./api/${LENS_API_SCHEMA_FILENAME}`)
  await generateLensApiDocuments();
};

const generateLensApiDocuments = async () => {
  if (!existsSync('../lens-api-examples')) {
    console.error('Git submodule "lens-api-examples" doesn\'t exists');
    throw new Error('NO_API');
  }
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


lensApiGenerator().then(() => console.log('API has been generated successfully!')).catch(e => {
  console.error('Error during API generation', e);
  throw new Error(e);
});
