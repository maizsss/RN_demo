/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { 
    AppRegistry, 
    Alert,
} from 'react-native';
import App from './src/containers/App.js';
import codePush from 'react-native-code-push';

class easystart extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <App />
        );
    }

    componentDidMount() {
        // Alert.alert('vertag10');
        codePush.sync();
        // codePush.checkForUpdate()
        // .then( (update) =>{
        //     if( !update ){
        //         Alert.alert("app是最新版了");
        //     }else {
        //         Alert.alert("有更新哦");
        //         codePush.sync();
        //     }
        // });
    }
}

AppRegistry.registerComponent('easystart', () => easystart);
