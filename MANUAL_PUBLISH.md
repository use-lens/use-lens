# How to do manual publish

- Update the submodule **/lens-api-examples**
- Update **/api/*.lens-api.schema.graphql** from https://api.lens.dev and https://api-mumbai.lens.dev
- Implement things you want
- Build with `./scripts/build-only.sh` and test required **/packages** with **/examples**
- Commit and push changes for the lib and the submodule
- Update:
  - CHANGELOG.md
  - `/packages/*` README's _Last Update_
- Publish in order:
  - `./scripts/publish-testnet.sh`
  - `./scripts/publish-mainnet.sh`