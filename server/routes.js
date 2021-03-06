import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import htmlTemplate from './index-template.js';
import Counter from './counter';
import RevealApp from '../components/reveal';

const router = express.Router();
const revealCounter = new Counter();

router.get('/', (req, res) => {
  let percentage = revealCounter.status();
  let reactDom = renderToString(<RevealApp percentage={percentage} />);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDom));
});

router.get('/reset', (req, res) => {
  revealCounter.reset();
  res.sendStatus(200);
});

router.post('/increment', (req, res) => {
  revealCounter.increment();
  const { socket } = req.app.get('socketio');
  socket.emit('percentage', { percentage: revealCounter.status() });
  res.sendStatus(200);
});

export default router;
