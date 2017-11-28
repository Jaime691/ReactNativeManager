import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBrJEcQ413trvonJ32mbo82yRPXKGEaCnQ',
            authDomain: 'reactnativemanager-98271.firebaseapp.com',
            databaseURL: 'https://reactnativemanager-98271.firebaseio.com',
            projectId: 'reactnativemanager-98271',
            storageBucket: 'reactnativemanager-98271.appspot.com',
            messagingSenderId: '31068770013'
        };

        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
          <Provider store={store}>
            <Router />
          </Provider>  
        );
    }
}

export default App;