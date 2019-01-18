import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Webtrekk from './lib/react-native-webtrekk';
Webtrekk.init();

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    const pagepParameter = await this.addTrackingParameter('PAGE', '1', 'personalized');
    const pageCatParameter = await this.addTrackingParameter('PAGE_CAT', '1', 'de');
    const everId = await this.getEverId();
    console.log(everId, pagepParameter, pageCatParameter);
  }

  addTrackingParameter(parameter, index, value) {
    return Webtrekk.addTrackingParameter(parameter, index, value);
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
