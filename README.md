# Node.js Server example

Serve static files with [Fastify](https://github.com/fastify/fastify), using HTTP/2 over TLS on port 8080.
Handle Websocket communication with Socket.io on port 8081.

## Install
`npm i`
`npm i -g nodemon`

## Start
For * nix, in separate terminals:
`npm run start-http2`
`npm run start-ws`

For Windows, a single command to start both in new cmd windows:
`npm run start-win`

## Run
Go to https://localhost:8080 and inspect network traffic. Local static files should be served over h2 & pushed
