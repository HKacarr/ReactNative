import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Geolocation from "@react-native-community/geolocation";

class WatchPosition extends Component {

  constructor() {
    super();

    this.state = {
      latitude: '',
      longitude: ''
    }
  }

  _stopGetLocation = () => {
    Geolocation.clearWatch(this.watchId);
  }

  componentDidMount() {
    Geolocation.requestAuthorization();

    this.watchId = Geolocation.watchPosition(
      position => {
        let { coords } = position;

        let latitude = coords.latitude;
        let longitude = coords.longitude;

        this.setState({latitude, longitude});
      },
      error => {

      }, {
        // Current Location ile aynı değerler burası için de geçerli
      }
    )
  }

  componentWillUnmount() {
    // Sayfadan çıkıldığında konumu almayı durdurur
    Geolocation.clearWatch(this.watchId);
  }


  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Latitude : {this.state.latitude}</Text>
        <Text>Longitude : {this.state.longitude}</Text>
        <TouchableOpacity onPress={() => this._stopGetLocation()}>
          <Text>Stop to get Location</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default WatchPosition;
