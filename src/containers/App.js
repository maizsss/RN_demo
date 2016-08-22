import React, { Component } from 'react';
import { 
	View, 
	Text,
	ListView,
	Alert
} from 'react-native';

import Base from './Base';

import { receiveServerByFetch } from '../util/receiveServerApi.js';

export default class App extends Component {
	constructor(props) {
		super(props);
		
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const items = [
            
        ];

        this.state = {
            items: items,
            dataSource: ds.cloneWithRows(items),
            total: items.length
        }
	}

	render() {
		return (
			<Base 
				state={this.state}
                editItem={this.editItem.bind(this)} />
		)
	}

	editItem(item) {
        const _this = this;
        const items = _this.state.items.map(val =>
            val.id === item.id ? Object.assign({}, val, item) : val
        );

        _this.setItems(items, () => {
        	Alert.alert(
                '提示',
                '修改成功'
            );
        });

    }

    setItems(items, cb) {
    	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    	this.setState({
            items: items,
            dataSource: ds.cloneWithRows(items),
            total: items.length
        }, () => {
            cb && cb();

        });
    }

	componentDidMount() {
		const _this = this;
		receiveServerByFetch('http://114.112.156.223:3000/demo/RN_demo_data/init', {page: 1}, (data) => {
			_this.setItems(data.data.items);
			console.log(data);
		});
	}
}