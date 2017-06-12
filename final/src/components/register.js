import React, {Component} from 'react'
import {View, TextInput, Text, StyleSheet, TouableHighlight} from 'react-native'

class register extends Component {

  constructor () {
    super();

    this.state = {

      name:"",
      email: "",
      password:"",
      confirm_password:"",
      errors: []
    }
  }

  render () {

  async onRegisterPressed () {
    try {
      let response =await fetch ('', {
        method:'Post',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify ({
          user: {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirm_password: this.state.confirm_password
          }
        })
      });

      let res = await response.text();

      console.log("res is": + res);
    }catch (errors){

      }
    }
    return (
      <View style = {styles.container}>
        <TextInput
        onChangeText={(val) => this.setState ({name: val})}
        style = {styles.input}
        placeholder = "Enter Full Name"
        />

        <TextInput
        onChangeText={(val) => this.setState ({email: val})}
        style = {styles.input}
        placeholder = "Enter Email address"
        />

        <TextInput
        onChangeText={(val) => this.setState ({password: val})}
        style = {styles.input}
        placeholder = "Enter Password"
        secureTextEntry={true}
        />

        <TextInput
        onChangeText={(val) => this.setState ({confirm_password: val})}
        style = {styles.input}
        placeholder = "Confirm Password"
        secureTextEntry={true}
        />

        <TouableHighlight style ={style.button} onPress ={this.onRegisterPressed.bind(this)}>
          <Text style = {styles.buttonText}
            Register
          </Text>
        </TouchableHighlight>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  }

});

export default register
