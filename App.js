import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Header from './app/Components/Header';
import Hero from './app/Components/Hero';
import Body from './app/Components/Body';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <Hero />
        <Body />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
