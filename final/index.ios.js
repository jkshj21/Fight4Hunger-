/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Home from './home';
import Register from './src/components/register'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class final extends Component {
  render() {
    return (
      <Register/>
    );
  }
}

const styles = StyleSheet.create({
  title : {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: 'center',
    alignItems:'center'
  }
});


AppRegistry.registerComponent('final', () => final);
