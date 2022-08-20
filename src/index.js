import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import App from './common/app';
import routes from './common/routes';
import { store } from './common/redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@backyard/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
            <BrowserRouter basename="/node-onboard">
                <ThemeProvider theme={'light'}>
                    <App routers={routes} />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
