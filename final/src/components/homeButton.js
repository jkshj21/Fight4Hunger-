import React, {Component} from 'react'
import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native'

export default class homeButton extends Component {
  render () {
    return (
    <View>
      <View style = {styles.Container}>
        <TouchableOpacity style = {styles.buttonContainer}>
          <Text style ={styles.buttonText}> Register </Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.Container}>
        <TouchableOpacity style = {styles.buttonContainer}>
          <Text style = {styles.buttonText}>Donate us </Text>
        </TouchableOpacity>
      </View>
    </View>
    );

  }
}

const styles = StyleSheet.create ({
  Container: {
    padding: 20
  },
  buttonContainer: {
    backgroundColor: '#95a5a6',
    paddingVertical: 15,
    paddingHorizontal: 100
  },
  buttonText : {
    textAlign:'center',
    color:'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
