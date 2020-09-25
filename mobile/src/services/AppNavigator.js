import React, {Component} from 'react';
import {View, Text} from 'react-native';
// import {
//   createStackNavigator,
//   createAppContainer,
//   createSwitchNavigator,
// } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';

// const AuthStack = createStackNavigator({
//   Login: {
//     screen: LoginScreen,
//     navigationOptions: {
//       header: null,
//     },
//   },
// });

// const AppStack = createStackNavigator({
//   Main: {
//     screen: MainScreen,
//   },
// });

export default class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> AppNavigator </Text>
      </View>
    );
  }
}
