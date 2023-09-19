import React, {Component} from 'react';
import FirstComponent from './FirstComponent';
import {View, Text, TouchableOpacity} from 'react-native';

export default class SecondComponent extends Component {
  render() {
    return (
      <View>
        <Text>Second Component</Text>
      </View>
    );
  }
}
