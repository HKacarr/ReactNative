/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from "react-native";
import MapView, { enableLatestRenderer } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

enableLatestRenderer();

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>Hasan Kacar</Text>

      <MapView
        style={styles.container}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
    </SafeAreaView>
  );
}


export default App;
