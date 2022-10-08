cp ../../api/{lens-api.documents.graphql,.use-lens.json} .
[[ $TESTNET = true ]] && LENS_API_NETWORK="_TESTNET_" || LENS_API_NETWORK="_MAINNET_"
cp ../../api/$LENS_API_NETWORK.lens-api.schema.graphql ./lens-api.schema.graphql