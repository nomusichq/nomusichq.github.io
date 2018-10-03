import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const config = {
  apiKey: process.env.APP_APIKEY,
  authDomain: process.env.APP_AUTHDOMAIN,
  databaseURL: process.env.APP_DATABASEURL,
  projectId: process.env.APP_PROJECTID,
  storageBucket: process.env.APP_STORAGEBUCKET,
  messagingSenderId: process.env.APP_MESSAGINGSENDERID,
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
