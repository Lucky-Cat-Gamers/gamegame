import React, { Component } from 'react';
import ReactDOM             from 'react-dom';
import * as firebase        from 'firebase/app';
import                           'firebase/auth';
import                           'firebase/firestore';
import * as firebaseui      from 'firebaseui';
import { Provider }         from 'react-redux';
import { PersistGate }      from 'redux-persist/integration/react';
import ReactGA              from 'react-ga';

import store, { persistor } from './config/store';
import App                  from './App';
import Spinner              from './components/spinner';

import 'typeface-roboto';
import 'typeface-montserrat';

import './index.scss';

// supresses enormous amount of console.logs
/* global soundManager:false */
import 'react-sound';

soundManager.setup({
  debugMode: false,
  ignoreMobileRestrictions: true
});

if(process.env.REACT_APP_GOOGLE_ANALYTICS) {
  console.info('reporting page view to Google Analytics...');
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
  ReactGA.pageview('/');
}

const firebaseConfig = {
  apiKey: "AIzaSyCK5mtwVH-H4snd14ttJI5rYe1qakHxv3U",
  authDomain: "witchfall-29ae8.firebaseapp.com",
  databaseURL: "https://witchfall-29ae8.firebaseio.com",
  projectId: "witchfall-29ae8",
  storageBucket: "witchfall-29ae8.appspot.com",
  messagingSenderId: "998531405712",
  appId: "1:998531405712:web:17b3af65b644f118b8c515",
  measurementId: "G-XJND7DKVJQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const ui = new firebaseui.auth.AuthUI(firebase.auth());

class ConnectedApp extends Component {

  // refresh the local storage in case the redux store structure is old
  componentDidCatch() {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return(
      <Provider store={store}>
        <PersistGate
          loading={<Spinner />}
          persistor={persistor}>
          <App />

        </PersistGate>
      </Provider>
    );
  }
}

ReactDOM.render(<ConnectedApp />, document.getElementById('react-rpg'));
