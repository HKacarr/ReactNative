/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {
    FlatList,
    SafeAreaView,
    Text, View,
} from 'react-native';

import ItemComponent from "./components/ItemComponent";

const renderItem = ({item}) => {
  return ( <ItemComponent item={item} /> )
}

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#D9D9D9', justifyContent: 'center'}}>
     <FlatList
         style={{padding: 20}}
         data={["Elma", "Armut", "Karpuz", "Kavun"]}
         renderItem={renderItem}
     />
    </SafeAreaView>
  );
}

export default App;
