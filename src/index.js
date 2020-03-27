import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// import { reduxFirestore, getFirestore } from 'redux-firestore'
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { reactReduxFirebase } from 'react-redux-firebase' // removed
import { reduxFirestore } from 'redux-firestore'          // removed

import fbConfig from './config/fbConfig'

const store = createStore(
  rootReducer,
  //initialState,
  compose(
    reduxFirestore(firebase)
  )
)

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

// const store = createStore(rootReducer, 
//   compose(
//     applyMiddleware(
//       //npm i --save react-redux-firebase@next
//       thunk.withExtraArgument({ 
//         getFirebase, getFirestore 
//       })
//     ),
//     reduxFirestore(fbConfig),
//     reactReduxFirebase(fbConfig)
//   )
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
