import React from "react";
import { Text, View } from "react-native";

export const Items = ({item}) => {
  return (
      <View style={{flex:1, marginLeft:5, marginRight: 5,padding: 10, backgroundColor: '#E9E9E9', marginBottom: 10, overflow: 'hidden', borderRadius: 15}}>
        <View style={{width: '100%', borderRadius: 1, borderBottomWidth: 1, borderColor: 'black', borderStyle: 'solid', padding: 5}}><Text style={{fontWeight: '700'}}>*{item.title}</Text></View>
        <Text style={{fontSize: 15,padding: 5}}>{item.body}</Text>
      </View>
  )
}
