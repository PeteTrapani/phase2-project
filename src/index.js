import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutButton from './Structures/Header';
import CompareUsers from './Structures/Compare';
import SteamUser from './Structures/SteamUser';
import Header from './Structures/Header';
import recentGames from './Structures/RecentGames';
import ScrollIndicator from './Structures/ScrollIndicator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ScrollIndicator />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
