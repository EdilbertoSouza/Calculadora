import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
	containerCol: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		height: 100,
		width: 350,
	},
	containerRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: 350,
	},
	containerOptions: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 10,
		padding: 10,
		width: 350,
	},
	buttonNumber: {
		borderRadius: 5,
		backgroundColor: '#1976D2',
		marginTop: 5,
		margin: 5,
		alignItems: 'center',
		justifyContent: 'center',
		height: 60,
		width: 60,
	},		
	buttonOperation: {
		borderRadius: 5,
		backgroundColor: '#757575',
		marginTop: 5,
		margin: 5,
		alignItems: 'center',
		justifyContent: 'center',
		height: 60,
		width: 60,
	},
	buttonResult: {
		borderRadius: 5,
		backgroundColor: '#558B2F',
		marginTop: 5,
		margin: 5,
		alignItems: 'center',
		justifyContent: 'center',
		height: 60,
		width: 60,
	},
	buttonOption: {
		borderRadius: 5,
		backgroundColor: '#757575',
		margin: 5,
		alignItems: 'center',
		justifyContent: 'center',
		height: 100,
	},
	text: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textOption: {
		fontSize: 18,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Styles;
