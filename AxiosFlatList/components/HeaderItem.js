import React from "react";
import { Text, View } from "react-native";

const HeaderItem = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10}}>
      <Text>Header Item for FlatList Component</Text>
    </View>
  )
}

export default HeaderItem;
