import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer.js';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'fr',
  resources: {
      en: {
          common: common_en
      },
      fr: {
          common: common_fr
      },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: rootReducer
});

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
              <App/>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
