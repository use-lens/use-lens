# WIP
Approx. initial implemetation finish date: 30 September 2022

# Use Lens

List of libraries that hold generated Lens API in form of hooks

Todo:
- write script to update SCHEMA
- add CLI for eject and add more flexibility: `use-lens react-apollo`
  - by "name" load codegen and GQL documents(from github) and add .use-lens.json file to hold name and version for clarity
- add --folder to specify CLI output

- lens api and documents should be generated and committed and use-lens.json should be added with when it has been generated.

Chore Todo:
- add Nx cache?
- create CI/CD for manual/automatic build


## How to generate Documents

- take latest API
- load gitsubmodule `api-examples`
- go through folder `src`
- take all files except /abi
- take out Private variable
- append to lens-api.document

## LICENSE
