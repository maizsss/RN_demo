import React, { Component } from 'react';
import { 
	View, 
	Text,
	Alert,
	ListView,
	StyleSheet,
	TouchableHighlight,
	TextInput,
	TouchableOpacity
} from 'react-native';

export default class Content extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.item);
		this.state = {
			input_content: this.props.item.content,
			title: this.props.item.title
		};
	}

	backToList() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }

    ctHeader() {
    	return (
    		<View style={styles.ctHeader}>
	    		<TouchableHighlight 
	    			underlayColor='rgba(0,0,0,0)'
					style={styles.backButton}
					onPress={this.backToList.bind(this)}>
					<Text 
						style={styles.backButtonText}>
						 返回
					</Text>
				</TouchableHighlight>
			</View>
    	)
    }

    ctWrap() {
    	return (
    		<View style={styles.ctWrap}>
    			<TextInput
    				style={styles.ctWrapTitle}
    				onChangeText={(text) => this.setState({
						title: text
					})}>
    				{ this.props.item.title }
    			</TextInput>
    			<TextInput
    				multiline={true}
    				style={styles.ctWrapText}
    				onChangeText={(text) => this.setState({
						input_content: text
					})}>
    				{ this.props.item.content }
    			</TextInput>
    		</View>
    	)
    }

	render() {
		return (
			<View style={styles.container}>
				{ this.ctHeader() }
				{ this.ctWrap() }
				<TouchableOpacity 
					style={styles.submitButton}
					onPress={this.submitAction.bind(this)}>
					<Text style={styles.submitButtonText}>
						确定修改
					</Text>
				</TouchableOpacity>
			</View>
		)
	}

	submitAction() {
		console.log(this.state);
		this.props.editItem(
			Object.assign({}, 
				this.props.item, 
				{
					content: this.state.input_content,
					title: this.state.title
				}
			)
		);
		
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	ctHeader: {
		height: 40,
		paddingLeft: 10,
		paddingRight: 10,
    	backgroundColor: '#f0f0f0',
    	flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	backButton: {
		
	},
	backButtonText: {
		color: "#0bb75b",
		fontSize: 14,
		marginTop: 15,
		paddingLeft: 4,
	},
	ctWrap: {
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 12,
		paddingRight: 12,
	},
	ctWrapTitle: {
		fontSize: 14,
		lineHeight: 22,
		color: '#5e5e5e',
	},
	ctWrapText: {
		fontSize: 14,
		lineHeight: 22,
		color: '#5e5e5e',
		height: 110,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	submitButton: {
		width: 100,
		height: 40,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "#0bb75b",
		marginLeft: 12
	},
	submitButtonText: {
		color: "#fff",
		fontSize: 16
	}
});