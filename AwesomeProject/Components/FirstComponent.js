import React from 'react';
import {View, Text} from 'react-native';

const FirstComponent = (props) => {
  return (
    <View>
      <Text>{props.username} {props.text}</Text>
    </View>
  );
};

export default FirstComponent;
