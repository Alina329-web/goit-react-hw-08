import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Імпортуємо Provider з react-redux
import App from './App';
import './index.css';
import { store } from './components/redux/store'; // Імпортуємо store з Redux

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {' '}
    {/* Обгортаємо App в Provider */}
    <App />
  </Provider>
);
