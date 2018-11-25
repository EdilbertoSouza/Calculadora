import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Styles  from './Styles.js';

const Display = props => {
	const { result } = props;
	return(
		<View style = { Styles.displayContainer } >
			<TextInput style={Styles.displayText} placeholder='Resultado' editable={false}>
				{ result }
			</TextInput>
		</View>
	);
};

export default Display;

const styles = StyleSheet.create({
	container: {
		marginTop: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		margin: 25,
		height: 60,
		width: 300,
		borderColor: 'gray',
		borderWidth: 1,
		fontWeight: 'bold',
		fontSize: 30,
		justifyContent: 'center',
		textAlign: 'center',
	},
});