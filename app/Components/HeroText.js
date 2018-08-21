/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

 class HeroText extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headertext}>Shoes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headertext: {

    elevation: 3,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    color: '#f1c40f',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
});


export default HeroText;
