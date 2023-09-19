import React from "react";
import { Image, Text, View } from "react-native";

export const ItemsScroll = ({item}) => {
  return (
    <View style={{flex:1, marginLeft:5, marginRight: 5,padding: 10, backgroundColor: '#E9E9E9', marginBottom: 20, overflow: 'hidden', borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{width: '100%', borderRadius: 1, borderBottomWidth: 1, borderColor: 'black', borderStyle: 'solid', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontWeight: '700', marginBottom: 20}}>*{item.display_name}</Text>
        <Image source={{uri: item.profile_image}} style={{width: '100%', height: 150, marginBottom: 20, borderRadius: 15}} />
      </View>
      <View style={{minHeight: 70}}>
        <Text style={{fontSize: 15,padding: 5, marginTop: 20, fontWeight: '500'}}>{item.location ?? <Text style={{fontStyle: 'italic', color: 'darkgrey'}}>No Information</Text> }</Text>
      </View>
    </View>
  )
}
