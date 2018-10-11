import React from 'react';
import { hydrate } from 'react-dom';
import RevealApp from '../components/reveal';

const app = document.getElementById('app');
hydrate(<RevealApp />, app);
