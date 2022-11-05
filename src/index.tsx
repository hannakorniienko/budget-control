import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Provider } from 'react-redux';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const renderApp = () =>{
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
}

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}
renderApp()

reportWebVitals();
