import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import fb from './screens/fb';
import inst from
export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}
var TabNavigator=createBottomTabNavigator({
  fb:{screens:fb},
  inst:{screens:inst}

})
var AppContainer=createAppContainer(TabNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
