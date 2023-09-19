import React from "react";
import { View, Text } from "react-native";

const EmptyItems = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: '700', fontSize: 15}}>Data is not exist on the System</Text>
    </View>
  )
}

export default EmptyItems;
