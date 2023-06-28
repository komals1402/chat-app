import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyAcdGZsCR0e9Jj_N2NqCW1M3Z-mBKUIoqE',
  authDomain: 'chat-web-app-21c1d.firebaseapp.com',
  databaseURL: 'https://chat-web-app-21c1d-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-21c1d',
  storageBucket: 'chat-web-app-21c1d.appspot.com',
  messagingSenderId: '34630340704',
  appId: '1:34630340704:web:78335ffccf0cf8ba4eb305',
};

const app = firebase.initializeApp(config);
