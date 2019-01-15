import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { NativeModules } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    NativeModules.Greeter.setup(message => {
      console.log(message)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
