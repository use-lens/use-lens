cp ../../api/{lens-api.documents.graphql,.use-lens.json} ./api
[[ $TESTNET = true ]] && LENS_API_NETWORK="_TESTNET_" || LENS_API_NETWORK="_MAINNET_"
cp ../../api/$LENS_API_NETWORK.lens-api.schema.graphql ./api/lens-api.schema.graphql

for packageName in 'react-apollo'; do
  cp ../$packageName/codegen.yml ./api/$packageName.yml
done
