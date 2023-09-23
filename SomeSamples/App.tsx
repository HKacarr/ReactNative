/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";




function App(): JSX.Element {
  return (
    <SafeAreaView>
      <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{flex:1, padding: 50}}
      />
    </SafeAreaView>
  );
}

export default App;
