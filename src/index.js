// Importing React, ReactDOM and BrowserRouter
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'; // Importing redux provider
import { ToastContainer } from 'react-toastify'; // Importing toastify for notification
import 'react-toastify/dist/ReactToastify.css';
import './index.css'; //Importing styling
import App from './components/App'; //  Importing App component
import store from './store'; // Importing store


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App /> {/* Rendering the App component */}
        <ToastContainer autoClose ="2000" />
      </Provider>
    </React.StrictMode>
  </Router>
);
 