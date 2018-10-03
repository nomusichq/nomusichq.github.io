import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const config = {
  apiKey: 'AIzaSyCVs37OGEDlUKV7HjNjafLWVExLcu_gG0M',
  authDomain: 'nomusic-web.firebaseapp.com',
  databaseURL: 'https://nomusic-web.firebaseio.com',
  projectId: 'nomusic-web',
  storageBucket: '',
  messagingSenderId: '834312253465',
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
