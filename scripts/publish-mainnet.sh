yarn run generate-api
yarn run build
git add api packages && git commit -m "chore(ci): generate api for mainnet"
yarn run mainnet:version
yarn run mainnet:publish
