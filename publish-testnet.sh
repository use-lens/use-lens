export TESTNET="true"
yarn run generate-api
git add api packages && git commit -m "chore(ci): generate api for testnet"
yarn run build
yarn run testnet:version
yarn run testnet:publish
