import React from 'react';
import {
  Container, Content, Text, H1, H2, H3
} from 'native-base';
import Spacer from './UI/Spacer';
import { View, Image, StyleSheet, Button, TouchableOpacity, onPress } from 'react-native';


const testAnalysisScreen = () => (
  <View style = {{flex: 1, flexDirection:'column'}}>
      <View style={styles.title_container}>
      <Image
        style={styles.canvas}
        source={require('../images/test_pos.png')}
        resizeMode="contain"
      />
      </View>

        <View style = {styles.container}>

        <Text style={styles.posText}>COVID-19 POSIITVE</Text>

        <TouchableOpacity style={[styles.baseText, styles.buttonText]}>
          <Text style={[styles.baseText]}>SAVE ENTRY</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.baseText, styles.secondButtonText]}>
          <Text style={[styles.baseText, styles.secondButtonTexxt]}>DISCARD ENTRY</Text>
        </TouchableOpacity>
      </View>
  </View>
);

const styles = StyleSheet.create({
  baseText:{
    fontFamily: 'Futura',
    color: 'gray',
    alignSelf: 'center',
    fontSize: 20,
  },
  posText:{
    fontFamily: 'Futura',
    color: 'crimson',
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 30,
  },
  titleText:{
    fontFamily: 'Futura',
    color: 'gray',
    alignSelf: 'center',
    fontSize: 20
  },
  title_container: {
    flex: 1,
    marginTop: 17,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  canvas: {
    flex: 1,
    alignItems: 'stretch',
  },
  buttonText: {
    paddingTop:15,
    paddingBottom:15,
    paddingRight:110,
    paddingLeft:110,
    borderRadius:30,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10
  },
  secondButtonText: {
    paddingTop:15,
    paddingBottom:15,
    paddingRight:92,
    paddingLeft:92,
    borderRadius:30,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'darkgray',
    margin: 10
  },
  secondButtonTexxt: {
    color: 'white'
  }

})

export default testAnalysisScreen;
