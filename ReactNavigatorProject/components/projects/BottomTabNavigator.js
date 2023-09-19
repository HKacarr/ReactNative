import React, { Component } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


function Home({navigation})
{
  return(
    <SafeAreaView>
      <Button title={'Go Detail Page'} onPress={() => navigation.navigate('Detail')} />
    </SafeAreaView>
  );
}

function Detail({navigation})
{
  return(
    <SafeAreaView>
      <Button title={'Go Home Page'} onPress={() => navigation.navigate('Home', {
        id: 5,
        name: "Hasan Kacar"
      })} />
    </SafeAreaView>
  );
}


const Stack = createBottomTabNavigator();

function BottomTabNavigator()
{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigator;
