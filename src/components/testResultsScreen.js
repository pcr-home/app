import React from 'react';
import {
  Container, Content, Text, H1, H2, H3
} from 'native-base';
import Spacer from './UI/Spacer';
import { View, Image, StyleSheet, Button, TouchableOpacity, onPress } from 'react-native';
import { Actions } from 'react-native-router-flux';

const testResultsScreen = () => (
  <View style = {{flex: 1, flexDirection:'column'}}>
      <View style={styles.title_container}>
          <Text style = {styles.baseText}>INDEXING SEQUEUNCE</Text>
      <Image
        style={styles.canvas}
        source={require('../images/result_example.png')}
        resizeMode="contain"
      />
      </View>
        <View style = {styles.container}>
        <Text style={styles.baseText}>ACTGCACGTCGAC...</Text>
        <TouchableOpacity
        style={[styles.baseText, styles.buttonText, styles.insideThing]}
        onPress={() => {
          Actions.testAnalysisScreen();
        }}
      >
        <Text style={[styles.baseText]}>ANALYZE</Text>
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
  insideThing: {
    margin: 30,
    marginBottom: 125,
  },
  titleText:{
    fontFamily: 'Futura',
    color: 'gray',
    alignSelf: 'center',
    fontSize: 20
  },
  title_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 107,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  canvas: {
    flex: 1,
    marginTop: 30,
    alignItems: 'stretch',
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

export default testResultsScreen;
