import React, { Component } from 'react';
import { 
	View, 
	Text,
	Navigator
} from 'react-native';

import List from './List';



export default class Base extends Component {
	constructor(props) {
		super(props);
		this.initialRoute = {
			name: 'List',
			component: List,
		}
	}

	configureScene() {
		return Navigator.SceneConfigs.PushFromRight;
	}

	renderScene(route, navigator) {

	let Component = route.component;

      return (
      	<Component 
      		state={this.props.state}
      		editItem={this.props.editItem}
      		{...route.params} 
      		navigator={navigator} />
      );
	}

	render() {
		let _this = this;
		return (
			<Navigator
				initialRoute={_this.initialRoute}
				configureScene={_this.configureScene.bind(_this)}
				renderScene={_this.renderScene.bind(_this)} />
		)
	}
}