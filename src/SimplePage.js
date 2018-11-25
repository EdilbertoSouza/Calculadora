import React from 'react';
import { View } from 'react-native';
import Display from './Display.js';
import InputButton from './InputButton.js';
import Styles  from './Styles.js';

const inputButtons = [
    [1, 2, 3, '+'],
    [4, 5, 6, '-'],
    [7, 8, 9, '*'],
    [0, '.', '=', '/'],
    ['C', 'CE']
];

export default class SimplePage extends React.Component {
	static navigationOptions = {
		title: 'Calculadora Simples',
    };
    
	ComponentDidMount() {
		console.log("SimplePage - ComponentDidMount ")
	}

	constructor(props) {
		super(props);
        this.initialState = {
            previousResult: "",
            result: "",
            operation: null
        };
        this.state = this.initialState;
	}

	onPress(param) {
		console.log(param);
		let numbers = "0123456789.";
        if (numbers.indexOf(param) >= 0) {
			return this.NumberInput(param);
		} 
		else {
            return this.OperationInput(param);
		}
	}

    NumberInput(num) {
		this.setState(
			{result: this.state.result + num}
		);
    }

	OperationInput(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
			case '-':
			
			this.setState({
				operation: str,
				previousResult: this.state.result,
				result: ""
			});
			break;

            case '=':
                let operation = this.state.operation,
				result = this.state.result,
				previousResult = this.state.previousResult;

                if (!operation) {
                    return;
                }

                this.setState({
                    previousResult: "",
                    result: eval(previousResult + operation + result),
                    operation: null
                });
                break;

            case 'CE':
                this.setState(this.initialState);
                    break;

            case 'C':
                this.setState({result: ""});
                break;
        }
    }

	render() {
		return (
			<View style={Styles.containerCol}>
				<Display result={this.state.result} />
                <View style={Styles.inputContainer}>
                    {this.renderInputButtons()}
                </View>
			</View>
		);
	}

    renderInputButtons() {
        let views = inputButtons.map((row, idx) => {
            let inputRow = row.map((buttonVal, columnIdx) => {
                return <InputButton value={buttonVal} onPress={this.onPress.bind(this, buttonVal)} key={'butt-' + columnIdx} />;
            });
            return <View style={Styles.containerRow} key={'row-' + idx}>{inputRow}</View>;
        });
        return views;
    }
}
