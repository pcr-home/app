import React from 'react';
import {
  Container, Content, Text, H1, H2, H3
} from 'native-base';
import Spacer from './UI/Spacer';
import { View, Image, StyleSheet, Button, TouchableOpacity, onPress } from 'react-native';


const testAnalysisScreen = () => (
  <View style = {{flex: 1, flexDirection:'column'}}>
      
      <View style={[styles.container, styles.image_container]}>
          <Image
            style={styles.canvas}
            source={require('../images/test_pos.png')}
            resizeMode="contain"
          />
          <Text style = {[styles.baseText, styles.negResultText]}>COVID-19 POSITIVE</Text>
        </View>
        <View style = {[styles.container, styles.button_container]}>
          <TouchableOpacity style={[styles.baseText, styles.buttonText]}>
            <Text style={styles.baseText}>SAVE ENTRY</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={[styles.baseText, styles.secondButtonText]}>
            <Text style={[styles.baseText, styles.secondButtonBaseText]}>DISCARD ENTRY</Text>
          </TouchableOpacity>
         </View>
  </View>
);

const styles = StyleSheet.create({
  baseText:{
    fontFamily: 'Futura',
    color: 'gray',
    alignSelf: 'center',
    fontSize: 20
  },
  image_container: {
    paddingTop: 15,
    justifyContent: 'center'
  },
  button_container: {
    justifyContent: 'space-around'
  },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'relative',
  },
  negResultText: {
    color: 'red'
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
  },
  secondButtonText: {
    paddingTop:15,
    paddingBottom:15,
    paddingRight:45,
    paddingLeft:45,
    borderRadius:30,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'dimgray'
  },
  secondButtonBaseText:{
    fontFamily: 'Futura',
    color: 'white',
    alignSelf: 'center',
    fontSize: 20
  },

})

export default testAnalysisScreen;
