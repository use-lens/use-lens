# @use-lens/cli
A CLI tool to generate Lens API code for different frameworks.

<a href="https://www.npmjs.com/package/@use-lens/cli" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/npm/v/@use-lens/cli/latest?color=limegreen&label=%40use-lens%2Fcli&logo=Use%20Lens%20CLI%20on%20npm" alt="Use Lens CLI on npm"/>
</a>
<a href="https://www.npmjs.com/package/@use-lens/cli" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/npm/v/@use-lens/cli/testnet?color=yellow&label=%40use-lens%2Fcli&logo=Use%20Lens%20CLI%20testnet%20on%20npm" alt="Use Lens CLI testnet on npm"/>
</a>

## ⚠️ CAUTION
🌿 https://docs.lens.xyz/docs/introduction:
> This API is beta and not production complete yet, which means that we could change schemas and endpoints at any time without warning or notice to you. When this API is production ready, we will remove this beta warning and will endeavor to ensure that there are no changes going forward unless a major change to the protocol itself is required.

Lens API is not production complete, and so is `@use-lens/*`. Please, keep this in mind when going to production.

There is an explanation of how I see the best use of `@use-lens/*` at this point in the main [README.md](https://github.com/use-lens/use-lens#-usage)

## 🤓 Usage
> All packages and CLI have 2 versions/dist-tags: `@testnet` and `@latest`.
> Install `@testnet` version only if you need some functionality from it(currently, it is only `createProfile`).

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

```bash
use-lens generate react-apollo
```


### Optional tsconfig's "paths"

Add `@use-lens/%PACKAGE%` or any name you want to **tsconfig.json**.

`@use-lens/%PACKAGE%` would let you easily switch to a %PACKAGE%, just by removing "paths".

```json lines
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@use-lens/%PACKAGE%": ["./src/use-lens/%PACKAGE%.ts"]
    }
  }
}
```

### WIP: CLI Flags
- TODO: --output-path - by default `./src/use-lens/%PACKAGE%.ts`
- TODO: --dry-run - by default `false`

### Recommended use
If you want **to play with Lens API** - don't hesitate and install some of the `@use-lens/*` packages - it will give you all you need to start.

If you want **to have more control** - use `@use-lens/cli` to generate code locally. CLI would copy essential files that a package contains and run `graphql-codegen`.

You would be able to do more with `codegen.yml`.  
Follow official docs of [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator) to understand how it works.

## 👨‍🏫 Example
https://github.com/use-lens/use-lens/tree/main/examples/cli-testnet

## 🔎 LICENSE

MIT. The full license text can be found in the LICENSE file.

> ...The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

## ⏲ Last update
2022/11/20
