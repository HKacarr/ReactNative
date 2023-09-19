/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView, Text } from "react-native";
import GeoLocationComponent from "./components/GeoLocationComponent";
import WatchPosition from "./components/WatchPosition";


function App(): JSX.Element {
  return (
    <SafeAreaView>
      {/*<GeoLocationComponent />*/}
      <WatchPosition />
    </SafeAreaView>
  );
}

export default App;
