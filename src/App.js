import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

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
    }
    render() {
        return (
          <Provider store={createStore(reducers)}>
            <LoginForm />
          </Provider>  
        );
    }
}

export default App;