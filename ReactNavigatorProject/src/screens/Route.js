import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import React from "react";
import Home from "./Home/index";
import Detail from "./Detail/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Stack = createBottomTabNavigator();

function Route() {
  const screenOptions = {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  }

  const options = {
    title: "Anasayfa",
    tabBarActiveTintColor: 'green',
    headerStyle: {
      backgroundColor: "gray",
    },

    headerTitleStyle: {
      color: "yellow",
      fontSize: 30,
      fontWeight: "bold",
    },
    headerRight: () => (
      <Button
        title="Next"
        onPress={() => alert("Next Event")}
        color="yellow"
      />
    ),
    headerLeft: () => (
      <Button title="Previous" onPress={() => alert("Previous Event")} color="yellow" />
    ),
  };


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} options={options} />
        <Stack.Screen name="Details" component={Detail} options={{tabBarActiveTintColor: 'green'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Route;
