import express from 'express';
import path from 'path';
import app from './app';
import socket from './socket';

const port = process.env.PORT || 8000;

app.use('/dist', express.static('dist'));

let server = app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

const socketServer = new socket(server);

process.on('SIGTERM', () => {
  server.close(() => {
    process.exit();
  }); // socket file is automatically removed here
});
