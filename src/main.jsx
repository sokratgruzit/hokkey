import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { ScrollToTop } from './components/UI/ScrollToTop.jsx';

import store from "./store/index";

import "./translate/i18n";

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ScrollToTop />
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
)
