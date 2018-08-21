/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Compo from './Compo';

 class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column1}>
          <Compo imageSource={require('./image/img1.jpeg')}/>
        </View>
        <View style={styles.column1}>
          <Compo imageSource={require('./image/img2.jpeg')}/>
        </View>
        <View style={styles.column2}>
          <Compo imageSource={require('./image/img3.jpeg')}/>
        </View>
        <View style={styles.column3}>
          <Compo imageSource={require('./image/img4.jpeg')}/>
        </View>
        <View style={styles.column3}>
          <Compo imageSource={require('./image/img5.jpeg')}/>
        </View>
        <View style={styles.column3}>
          <Compo imageSource={require('./image/img6.jpeg')}/>
        </View>
        <View style={styles.column3}>
          <Compo imageSource={require('./image/img7.jpeg')}/>
        </View>
        <View style={styles.column3}>
          <Compo imageSource={require('./image/img8.jpeg')}/>
        </View>
        <View style={styles.column3}>
          <Compo imageSource={require('./image/img9.jpeg')}/>
        </View>
        <View style={styles.column3}>
          <Compo imageSource={require('./image/img10.jpeg')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: '#ccc',
  },
  column1: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  column2: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  column3: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
});

export default Body;
