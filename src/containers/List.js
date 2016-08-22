import React, { Component } from 'react';
import { 
	View, 
	Text,
	Alert,
	ListView,
	StyleSheet,
	TouchableHighlight 
} from 'react-native';

import Content from './Content';

export default class List extends Component {
	constructor(props) {
		super(props);
	}

	renderHeader() {
		return (
			<View style={styles.listHeader}>
				<Text style={styles.listHeaderText}>列表({this.props.state.total})ver:1.0.12</Text>
			</View>
		);
	}

	renderRow(dataRow) {
		return (
			<TouchableHighlight
				underlayColor='#d9d9d9'
				onPress={this.linkToCt.bind(this, dataRow)}>
				<View style={styles.listRow}>
					<Text
						style={styles.listRowText}>
						{dataRow.id}. {dataRow.title}
					</Text>
				</View>
			</TouchableHighlight>
		)
	}

	renderList() {
		
		return (
			<ListView 
				enableEmptySections={true}
				dataSource={this.props.state.dataSource}
				renderHeader={this.renderHeader.bind(this)}
				renderRow={this.renderRow.bind(this)} />
		);
		
	}

	alertIndex(index) {
		Alert.alert(
            'Alert Title',
            '这是第'+ (index) +'条',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
        )

	}

	linkToCt(item) {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Content',
                component: Content,
                params: {
                	item: item
                }
            })
        }
    }

	render() {
		return (
			<View style={styles.container}>
				{ this.renderList() }
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		
	},
	listHeader: {
		height: 40,
		paddingLeft: 10,
		paddingRight: 10,
    	backgroundColor: '#f0f0f0',
    	justifyContent: 'flex-start',
    	alignItems: 'flex-start'
	},
	listHeaderText: {
		color: "#0bb75b",
		fontSize: 14,
		marginTop: 15,
		paddingLeft: 4,
	},
	listRow: {
		height: 40,
		paddingLeft: 10,
		paddingRight: 10,
    	backgroundColor: '#fff',
    	borderBottomWidth: 1,
    	borderBottomColor: '#f9f9f9',
    	flexDirection: 'row',
    	justifyContent: 'flex-start',
    	alignItems: 'center'
	},
	listRowText: {
		color: "#323232",
		fontSize: 12,
	}
});