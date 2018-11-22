import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from "react-navigation";

import MainPage  from './src/MainPage.js';
import SimplePage  from './src/SimplePage.js';
import SciencePage from './src/SciencePage.js';

export default class App extends React.Component {
	render() {
		return (
		 <AppContainer/>
		);
	}
}

const AppNavigator = createStackNavigator({
	Main: MainPage,
	Simple: SimplePage,
	Science: SciencePage
}, {
	initialRouteName: "Main"
});

const AppContainer = createAppContainer(AppNavigator);
