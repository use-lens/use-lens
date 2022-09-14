import chalk from 'chalk';
import fetch from 'node-fetch';
import { createWriteStream } from 'fs';
import { exec } from 'child_process';

export const generate = async (library: string) => {
  console.log('creating codegen.yml file...');
  await downloadFile(getRawCodegenUrl(library), './codegen.yml').catch(e => {
    console.error('Error in [downloadFile]');
    console.error(e);
    throw new Error(e);
  });

  console.log('executing graphql-codegen...');
  await executeCodegen().catch(e => {
    console.error('Error in [executeCodegen]');
    console.error(e);
    throw new Error(e);
  });

  console.log('done!');
};

// todo: remove token
const getRawCodegenUrl = (library: string) => `https://raw.githubusercontent.com/andriishupta/use-lens/main/packages/${library}/codegen.yml?token=GHSAT0AAAAAABWD73ND56YTFYVKAHIXKWCEYZBYI4A`;

const downloadFile = async (url: string, path: string) => {
  const res = await fetch(url);
  const fileStream = createWriteStream(path);
  await new Promise((resolve, reject) => {
    res.body!.pipe(fileStream);
    res.body!.on('error', reject);
    fileStream.on('finish', resolve);
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
