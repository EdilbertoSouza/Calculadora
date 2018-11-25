import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import Styles  from './Styles.js';

export default class MainPage extends React.Component {
  static navigationOptions = {
    title: 'Calculadora Opções',
  };
  
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    console.log("MainPage - componentWillMount")
  }
  
  componentDidMount() {
    console.log("Main Page - componentDidMount")  
  }

  onClick(param) {
    this.props.navigation.navigate(param);
  }

  render() {
    console.log("render")
    return (
      <View style={Styles.containerOptions}>
        <View style={Styles.containerOptions}>
          <Text style={Styles.textOption}> Esta é sua calculadora pessoal. 
            Com ela você tem duas opções para seus calculos, experimente
            a calculadora Simples para as quatro operações matemáticas e 
            a calculadora Científica para executar, além das quatro operações
            matemáticas, as operações trigonométricas (seno, cosseno e tangente) 
            e as operações de fatoração e raiz quadrada.
          </Text>
        </View>
        <View style={[Styles.containerCol]}>
          <TouchableOpacity style={Styles.buttonOption} onPress={this.onClick.bind(this, "Simple")}>
            <Text style={Styles.inputButtonText}> Simples </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.buttonOption} onPress={this.onClick.bind(this, "Science")}>
            <Text style={Styles.inputButtonText}> Científica </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
