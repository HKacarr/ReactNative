/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import {
  SafeAreaView, StyleSheet,
  Text
} from "react-native";

import MapView from "react-native-maps";
import axios from "axios";



class App extends React.Component{
  constructor() {
    super();
    this.state = {
      events: [],
      loading: true
    }
  }


  componentDidMount() {
    axios.get("https://eonet.gsfc.nasa.gov/api/v3/events")
      .then((res) => {
        // console.log(res.data.events);
        this.setState({events: res.data.events, loading: false});
      }).catch((err) => {
      // console.log(err);
    });
  }

  render() {
    const {loading} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {loading ? <Text>Loading....</Text> :

          <MapView
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          </MapView>
        }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
