import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container, Content, Text, H1, H2, H3
} from 'native-base';
import { View, Image, StyleSheet, Button, TouchableOpacity, onPress } from 'react-native';

const infoScreen = () => (
  <View style = {{flex: 1, flexDirection:'column', backgroundColor: 'white'}}>
      <View style={styles.title_container}>
          <Text style = {styles.baseText}>MEET THE DEVELOPERS</Text>
        </View>

        <View style = {{flex: 10, backgroundColor: 'white'}}>

          <View style = {[styles.container, styles.image_container]}>
            <Image
            style={styles.canvas}
            source={require('../images/stephanie_rounded.png')}
            resizeMode="contain"
          />
          <Text style = {[styles.baseText, styles.imageText]}>Stephanie Zhang</Text>
          </View>

          <View style = {[styles.container, styles.image_container]}>
            <Image
            style={styles.canvas}
            source={require('../images/justin_rounded.png')}
            resizeMode="contain"
          />
          <Text style = {[styles.baseText, styles.imageText]}>Justin Lin</Text>
          </View>

          <View style = {[styles.container, styles.image_container]}>
            <Image
            style={styles.canvas}
            source={require('../images/raymond_rounded.png')}
            resizeMode="contain"
          />
          <Text style = {[styles.baseText, styles.imageText]}>Raymond Deng</Text>
          </View>

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
  title_container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'white',
  },
  image_container: {
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  canvas: {
    flex: 1,
    alignItems: 'stretch',
    marginLeft:45,
    backgroundColor: 'transparent',
  },
  imageText: {
    flex: 1,
    paddingLeft: 15,
    paddingRight:15
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

export default infoScreen;
