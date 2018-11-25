import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Styles  from './Styles.js';

export default class InputButton extends Component {
    render() {
        return(
            <TouchableOpacity style={Styles.inputButton} onPress={this.props.onPress}>
                <Text style={Styles.inputButtonText}>{this.props.value}</Text>
            </TouchableOpacity>
        );
    }
};