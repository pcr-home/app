import React from 'react';
import {
  Container, Content, Text, H1, H2, H3
} from 'native-base';
import Spacer from './UI/Spacer';
import { View, Image, StyleSheet, Button, TouchableOpacity, onPress } from 'react-native';
import { Actions } from 'react-native-router-flux';

const testStartScreen = () => (
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
        onPress={() => Actions.testResultsScreen()}
      >
        <Text style={styles.baseText}>SEQUENCE</Text>
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
