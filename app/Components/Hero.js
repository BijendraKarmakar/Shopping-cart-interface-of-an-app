/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import HeroText from './HeroText';

 class Hero extends Component {
  render() {
    return (
        <ImageBackground
          source={require('./image/head.jpeg')}
          style={styles.img}
        >
        <HeroText />
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: '100%',
    alignItems:'center',
    justifyContent: 'center',
  },
});

export default Hero;
