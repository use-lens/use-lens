import chalk from 'chalk'
import { createWriteStream } from 'fs'

const USE_LENS_LIBRARIES = ['react-apollo']

export const generate = (library: string) => {
  if (!USE_LENS_LIBRARIES.includes(library)) {
    throw new Error(`${library} doesn't exists!`) // todo: exit, not throw error.
  }

  console.log('generated!')
}
