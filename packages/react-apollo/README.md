# ⚠️ Deprecation notice ⚠️
> This library is deprecated in favor of official [Lens Protocol's SDK](https://github.com/lens-protocol/lens-sdk) on 15th of February 2023.

> Do "Emergency Eject"(described in the root README.md) to replace usage of this lib

# @use-lens/react-apollo
Lens API generated code for Apollo Client in React.

<a href="https://www.npmjs.com/package/@use-lens/react-apollo" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/npm/v/@use-lens/react-apollo/latest?color=limegreen&label=%40use-lens%2Freact-apollo&logo=Use%20Lens%20React%20Apollo%20on%20npm" alt="Use Lens React Apollo on npm"/>
</a>
<a href="https://www.npmjs.com/package/@use-lens/react-apollo" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/npm/v/@use-lens/react-apollo/testnet?color=yellow&label=%40use-lens%2Freact-apollo&logo=Use%20Lens%20React%20Apollo%20testnet%20on%20npm" alt="Use Lens React Apollo testnet on npm"/>
</a>

## ⚠️ CAUTION
🌿 https://docs.lens.xyz/docs/introduction:
> This API is beta and not production complete yet, which means that we could change schemas and endpoints at any time without warning or notice to you. When this API is production ready, we will remove this beta warning and will endeavor to ensure that there are no changes going forward unless a major change to the protocol itself is required.

Lens API is not production complete, and so is `@use-lens/*`. Please, keep this in mind when going to production.

In case of breaking changes, please, visit main [README.md's FAQ](https://github.com/use-lens/use-lens#%EF%B8%8F-faq)

There is an explanation of how I see the best use of `@use-lens/*` at this point in the main [README.md](https://github.com/use-lens/use-lens#-usage)

## 🤓 Usage
> All packages and CLI have 2 versions/dist-tags: `@testnet` and `@latest`.
> Install `@testnet` version only if you need some functionality from it(currently, it is only `createProfile`).

- Install package
```
npm install --save @use-lens/react-apollo
```
- Add Apollo: https://www.apollographql.com/docs/react/get-started
- Use generated code

```typescript jsx
import {
  useAuthenticateMutation,
  useChallengeLazyQuery,
  useGlobalProtocolStatsQuery
} from '@use-lens/react-apollo';

const SomeComponent = () => {
  // component's code
  const [loadChallenge] = useChallengeLazyQuery();
  const [authenticate] = useAuthenticateMutation();

  const { data, error, loading } = useGlobalProtocolStatsQuery();
  
  return // render data from Lens API.
}
```

### Workflow
- decide what you want to implement
- go to 🌿 https://docs.lens.xyz to check what query or mutation you need to use
- import from `@use-lens/react-apollo` what you need
  - document(query or mutation)
  - request /response types

Detailed information about what is produced can be found here:

https://www.the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-apollo

## 👨‍🏫 Example
https://github.com/use-lens/use-lens/tree/main/examples/react-apollo

## 🔎 LICENSE
MIT. The full license text can be found in the LICENSE file.

> ...The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

## ⏲ Last update
2022/12/07