yarn run generate-api
git add api && git commit -m "chore(ci): generate api for mainnet"
yarn run build
yarn run version:mainnet
yarn run publish:mainnet
