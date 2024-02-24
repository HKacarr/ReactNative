import React from 'react';
import {NavigationContainer} from "@react-navigation/native";

import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';


function App(): React.JSX.Element {

    console.log("HK")

  return (
      <NavigationContainer>
          <SafeAreaView>
              <View>
                  <Text>HK</Text>
              </View>
          </SafeAreaView>
      </NavigationContainer>
  );
}

export default App;
