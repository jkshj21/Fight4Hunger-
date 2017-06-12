import React, { Component } from 'react';
import Home from './home';
import Button from './src/components/homeButton'
import {
  AppRegistry,
  StyleSheet,
  Text,
  InputText,
  View,
  Image
} from 'react-native';

export default class home extends Component {
  render() {
    return (
      <View style= {styles.Container}>
        <View style = {styles.logContainer}>
          <Image
            style = {styles.logo}
            source = {require('./image/title.jpg')}
            />
              <Text> </Text>
              <Text> </Text>
              <Text style = {styles.titleText}>Fight for Hunger!</Text>
              <Text style={styles.subTitleText}>Powered by Second Timers </Text>
              <Text style = {styles.subTitleText}>Joohyong Han, Sanghoon Han, Yvonne Hu</Text>
            </View>
            <View>
              <Button/>
            </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#bdc3c7",
    justifyContent: 'center',
    alignItems:'center'
  },
  logContainer: {
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
  },
  logo: {
    width: 200,
    height: 200
  },

  titleText: {
    color: "white",
    fontSize: 35,
    fontWeight: 'bold'
  },

  subTitleText: {
    color:'white',
    fontWeight:'200'
  },

  titleView: {
    flex: 1,
    justifyContent:'center',
  }
});
