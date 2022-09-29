yarn run generate-api
git add api && git commit -m "chore(ci): generate api"
yarn run build
yarn run version:mainnet
yarn run publish
