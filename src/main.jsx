import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import myStore from "./redux/store.js";

createRoot(document.getElementById('root')).render(
  <Provider store={myStore}>
    <App />
    <ToastContainer />
  </Provider>
)
