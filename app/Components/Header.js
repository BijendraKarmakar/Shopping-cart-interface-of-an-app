/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

 class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          source={require('./image/icon.png')}
          style={styles.logo}
        />
        <Text style={styles.logotext}> My Shopping Cart</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    marginTop: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,

  },
  logo: {
    width: 40,
    height: 40,
    marginTop: 20,
  },
  logotext: {
    marginTop: 20,
    marginLeft: 10,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17,
    fontStyle: 'italic',
  },
});

export default Header;
