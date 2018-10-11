import React from 'react';
import { hydrate } from 'react-dom';
import RevealApp from '../components/reveal';
import './styles.scss';

const app = document.getElementById('app');
hydrate(<RevealApp />, app);
