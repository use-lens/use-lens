TESTNET="true"
yarn run generate-api
git add api && git commit -m "chore(ci): generate api"
yarn run build
yarn run version:testnet
yarn run publish
