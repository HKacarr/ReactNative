import React, {Component} from 'react';
import {Text} from 'react-native';

class TextSubject extends Component {
  render() {
    return (
      <Text
        style={{
          fontSize: 19,
          fontWeight: 'bold',
          color: 'blue',
          marginTop: 100,
        }}>
        Hasan Kacar - Pamukkale Üniversitesi - Bilgisayar Mühendisliği
      </Text>
    );
  }
}

export default TextSubject;
