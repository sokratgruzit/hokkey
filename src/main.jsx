import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/index";

import "./translate/i18n";

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
)
