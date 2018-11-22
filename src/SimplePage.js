import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Display from './Display.js';
import Styles  from './Styles.js';

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

	onClick(param) {
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

            case 'ce':
                this.setState(this.initialState);
                    break;

            case 'c':
                this.setState({result: ""});
                break;
        }
    }

	render() {
		return (
			<View style={Styles.containerCol}>
				<Display result={this.state.result} />
				<View style={Styles.containerRow}>
					<TouchableOpacity style={Styles.buttonNumber} onPress={this.onClick.bind(this, "1")}>
						<Text style={Styles.text}> 1 </Text>
					</TouchableOpacity>
					<TouchableOpacity style={Styles.buttonNumber} onPress={this.onClick.bind(this, "2")}>
						<Text style={Styles.text}> 2 </Text>
					</TouchableOpacity>
					<TouchableOpacity style={Styles.buttonNumber} onPress={this.onClick.bind(this, "3")}>
						<Text style={Styles.text}> 3 </Text>
					</TouchableOpacity>
					<TouchableOpacity style={Styles.buttonOperation} onPress={this.onClick.bind(this, "+")}>
						<Text style={Styles.text}> + </Text>
					</TouchableOpacity>
				</View>
				<View style={Styles.containerRow}>
					<TouchableOpacity style={Styles.buttonNumber} onPress={this.onClick.bind(this, "4")}>
						<Text style={Styles.text}> 4 </Text>
					</TouchableOpacity>
					<TouchableOpacity style={Styles.buttonNumber} onPress={this.onClick.bind(this, "5")}>
						<Text style={Styles.text}> 5 </Text>
					</TouchableOpacity>
					<TouchableOpacity style={Styles.buttonNumber} onPress={this.onClick.bind(this, "6")}>
						<Text style={Styles.text}> 6 </Text>
					</TouchableOpacity>
					<TouchableOpacity style={Styles.buttonOperation} onPress={this.onClick.bind(this, "-")}>
						<Text style={Styles.text}> - </Text>
					</TouchableOpacity>
				</View>
				<View style={Styles.containerRow}>
					<TouchableOpacity style={Styles.buttonNumber} onPress={this.onClick.bind(this, "7")}>
						<Text style={Styles.text}> 7 </Text>
					</TouchableOpacity>
					<TouchableOpacity style={Styles.buttonNumber} onPress={this.onClick.bind(this, "8")}>
						<Text style={Styles.text}> 8 </Text>
					</TouchableOpacity>
					<TouchableOpacity style={Styles.buttonNumber} onPress={this.onClick.bind(this, "9")}>
						<Text style={Styles.text}> 9 </Text>
					</TouchableOpacity>
					<TouchableOpacity style={Styles.buttonOperation} onPress={this.onClick.bind(this, "*")}>
						<Text style={Styles.text}> * </Text>
					</TouchableOpacity>
				</View>
				<View style={Styles.containerRow}>
					<TouchableOpacity style={Styles.buttonNumber} onPress={this.onClick.bind(this, "0")}>
						<Text style={Styles.text}> 0 </Text>
					</TouchableOpacity>
					<TouchableOpacity style={Styles.buttonNumber} onPress={this.onClick.bind(this, ".")}>
						<Text style={Styles.text}> . </Text>
					</TouchableOpacity>
					<TouchableOpacity style={Styles.buttonResult} onPress={this.onClick.bind(this, "=")}>
						<Text style={Styles.text}> = </Text>
					</TouchableOpacity>
					<TouchableOpacity style={Styles.buttonOperation} onPress={this.onClick.bind(this, "/")}>
						<Text style={Styles.text}> / </Text>
					</TouchableOpacity>
				</View>
				<View style={Styles.containerRow}>
					<TouchableOpacity style={Styles.buttonOperation} onPress={this.onClick.bind(this, "c")}>
						<Text style={Styles.text}> C </Text>
					</TouchableOpacity>
					<TouchableOpacity style={Styles.buttonOperation} onPress={this.onClick.bind(this, "ce")}>
						<Text style={Styles.text}> CE </Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
