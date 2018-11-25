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
	buttonOption: {
		borderRadius: 5,
		backgroundColor: '#757575',
		margin: 5,
		alignItems: 'center',
		justifyContent: 'center',
		height: 100,
	},
	textOption: {
		fontSize: 18,
		alignItems: 'center',
		justifyContent: 'center',
	},
    displayContainer: {		
		marginTop: 5,
		alignItems: 'center',
		justifyContent: 'center',
    },
    displayText: {
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
    inputContainer: {
        flex: 8,
    },
    inputButton: {
		borderRadius: 5,
		backgroundColor: '#1976D2',
		marginTop: 5,
		margin: 5,
		alignItems: 'center',
		justifyContent: 'center',
		height: 60,
		width: 60,
    },
    inputButtonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 30,
		alignItems: 'center',
		justifyContent: 'center',
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default Styles;
