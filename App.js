import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Webtrekk from './lib/react-native-webtrekk';
Webtrekk.init();

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    const parameter = await this.addTrackingParameter()
    const everId = await this.getEverId();
    console.log(everId, parameter);
  }

  addTrackingParameter() {
    return Webtrekk.addTrackingParameter('PAGE', '1', 'personalized');
  }

  getEverId() {
    return Webtrekk.getEverId();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello there.</Text>
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
