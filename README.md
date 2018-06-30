# React-Express-Node Starter

Starter project for building apps with React, NodeJS and ExpressJS with Hot Module Reloading.

Like this starter project? [⭐️ it on Github](https://github.com/abinavseelan/React-Express-Node-Starter) to support it! 😄

## Development

To run the development build, run `npm run start:dev`.

The server is automatically built and reloaded using nodemon, and the client is Hot-module-reloaded. The client is avialable on port `9000` and the server APIs are available on port `9001`.

### Production

To build this project for production, run `npm start`.

This will build the client and server files, and start the server on port `9001`

## FAQ

### I don't want to transpile my server files

This project transpiles the server files into a `server.bundle.js`. This is for those who want to use unsupported ESNext features in Node, such as ES Modules, or for those who want to add in type checking via Typescript or FlowType.

If you don't want your server files transpiled/compiled through webpack, edit the following:

- In `package.json` _scripts_ section
  - Remove `start:server` and `build:server`.
  - Change `start:dev` to `"concurrently 'npm run start:client' 'nodemon server/index.js'"`
  - Change `start` to `"concurrently 'npm run build:client' 'NODE_ENV=production node server/index.js"`
- In `server/index.js`
  - Modify `import express from 'express` to `const express = require('express')` on line 1.

### I don't want my server to serve my client bundle in production / I want to upload my client to a CDN

In production, this project bundles the client and has the server serve both the client as well as the endpoints. If you do not want the API server to serve the client-side code, then make the following change

- In `server/index.js`, remove the block containing `express.static('/', 'dist')` (lines 7-9).
