import React from 'react';
import { hydrate } from 'react-dom';
import RevealApp from '../components/reveal';
import './styles.scss';
import io from 'socket.io-client';

const app = document.getElementById('app');
const socket = io();

hydrate(<RevealApp socket={socket} />, app);
