import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const testWebsocket = new WebSocket("wss://mainnet.vechain.org/subscriptions/beat2")

testWebsocket.onopen = () => {
  console.log("WS Open")
}

testWebsocket.onmessage = (event) => {
  console.log(event)
}

testWebsocket.onerror = (event) => {
  console.error(event)
}

testWebsocket.onclose = () => {
  console.warn("WS Closed")
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
