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
    }
}

AppRegistry.registerComponent('easystart', () => easystart);
