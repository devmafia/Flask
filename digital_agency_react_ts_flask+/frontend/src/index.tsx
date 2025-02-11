import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CallProvider } from './context/CallContext';
import { MessageProvider } from './context/MessageContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CallProvider>
      <MessageProvider>
        <App />
      </MessageProvider>
    </CallProvider>
  </React.StrictMode>
);

