import React, { Component } from 'react';
import {
  Container, Content, Text, H1, H2, H3
} from 'native-base';
import Spacer from './UI/Spacer';
import { View, Image, StyleSheet, Button, TouchableOpacity, onPress, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

class testStartScreen extends Component{

  constructor(props){
    super(props);

    this.state ={
      ml_response: ['hi']
    }
  }

render() {
  return(
  <View style = {{flex: 1, flexDirection:'column'}}>
      <View style={styles.container}>
          <Text style = {styles.baseText}>INSERT SWAB HERE</Text>
        </View>
        <View style = {styles.container}>
      <Image
        style={styles.canvas}
        source={require('../images/low_res_colored_swab.png')}
        resizeMode="contain"
      />
      </View>
        <View style = {styles.container}>
        <TouchableOpacity
        style={[styles.baseText, styles.buttonText]}
        onPress={() => {
          Alert.alert('Response received!')
          fetch('http://0.0.0.0:5000/api', {
          'method': 'GET',
          'headers': {
            Accept: 'appliation/json',
            'Content-Type': 'application/json',
          },
        }).then(response => {
          Alert.alert('Application run successfully!')
          Actions.testResultsScreen();
        })
        }}
      >
        <Text style={styles.baseText}>SEQUENCE</Text>
      </TouchableOpacity>
      </View>
  </View>
)};
}

const styles = StyleSheet.create({
  baseText:{
    fontFamily: 'Futura',
    color: 'gray',
    alignSelf: 'center',
    fontSize: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  canvas: {
    flex: 1,
    alignItems: 'stretch'
  },
  buttonText: {
    paddingTop:15,
    paddingBottom:15,
    paddingRight:45,
    paddingLeft:45,
    borderRadius:30,
    borderWidth: 1,
    borderColor: 'gray'
  }

})

export default testStartScreen;
