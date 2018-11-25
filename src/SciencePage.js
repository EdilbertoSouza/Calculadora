import React from 'react';
import { View } from 'react-native';
import Display from './Display.js';
import InputButton from './InputButton.js';
import Styles  from './Styles.js';

const inputButtons = [
    [1, 2, 3, '+','Sen'],
    [4, 5, 6, '-','Cos'],
    [7, 8, 9, '*','Tan'],
    [0, '.', '=', '/','Fat'],
    ['C', 'CE','Rai']
];

export default class SciencePage extends React.Component {
	static navigationOptions = {
		title: 'Calculadora Científica',
    };
    
	ComponentDidMount() {
		console.log("SciencePage - ComponentDidMount ")
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

		let operation = this.state.operation;
		let result = this.state.result;
		let previousResult = this.state.previousResult;

        switch (str) {
            case '/':
            case '*':
            case '+':
			case '-':
			
				this.setState({
					operation: str,
					previousResult: result,
					result: ""
				});
				break;

            case '=':
                if (!operation) {
                    return;
                }

                this.setState({
                    previousResult: "",
                    result: eval(previousResult + operation + result),
                    operation: null
                });
				break;
				
			case 'Sen':
                this.setState({
                    previousResult: "",
					result: Math.sin(result * Math.PI/180).toString(),
                    operation: null
                });
                break;

			case 'Cos':
                this.setState({
                    previousResult: "",
					result: Math.cos(result * Math.PI/180).toString(),
                    operation: null
                });
                break;

			case 'Tan':
                this.setState({
                    previousResult: "",
					result: Math.tan(result * Math.PI/180).toString(),
                    operation: null
                });
                break;

			case 'Fat':
                this.setState({
                    previousResult: "",
					result: this.factorial(result).toString(),
                    operation: null
                });
                break;

			case 'Rai':
                this.setState({
                    previousResult: "",
					result: Math.round(Math.sqrt(result),2).toString(),
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

	factorial(num) {
		if (num < 0) {
			return -1;
		}
		else if (num == 0) {
			return 1;
		}
		let tmp = num;
		while (num-- > 2) {
			tmp *= num;
		}
		return tmp;
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
