# @use-lens/cli
A CLI tool to generate Lens API code for different frameworks and libs.

## ⚠️ CAUTION

## How To Use

```bash
npm install --save-dev @use-lens/cli
use-lens generate %PACKAGE%
```

with `npx`
```bash
npx @use-lens/cli generate %PACKAGE%
```

### Available options:

#### [react-apollo](https://github.com/use-lens/use-lens/tree/main/packages/react-apollo)

`use-lens generate react-apollo`



### Optional tsconfig's "paths"

Add `@use-lens/%PACKAGE%` or any name you want(example, `@lens-api`) to **tsconfig.json**.

`@use-lens/%PACKAGE%` would let you switch to a _%PACKAGE%_ easy, just by removing "paths". 

```json
{
  //  ...
  "paths": [
    {"./src/lens-api/**": "@use-lens/react-apollo"}
  ]
  //  ...
}
```

### CLI Flags
Table of flags

- --output-path - by default `./src/lens-api`
- --dry-run - by default `false`

### Recommended use
- Article and why is that again

## How it works
it would clone schema and documents and would run graphql-codegen

## FAQ
- why this needed if we can install packages

## LICENSE

MIT. The full licence text could be found in the LICENSE file.

> ...The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

