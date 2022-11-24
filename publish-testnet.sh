export TESTNET="true"
yarn run generate-api
yarn run build
git add api packages && git commit -m "chore(ci): generate api for testnet"
yarn run testnet:version
yarn run testnet:publish
