yarn run generate-api
git add api packages && git commit -m "chore(ci): generate api for mainnet"
yarn run build
yarn run mainnet:version
yarn run mainnet:publish
