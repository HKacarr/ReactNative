import React, { Component } from "react";
import { Text, View } from "react-native";
import Geolocation from "@react-native-community/geolocation";

class GeoLocationComponent extends Component {
  constructor() {
    super();
    this.state = {
      latitude: '',
      longitude: ''
    }
  }


  componentDidMount() {
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(
      position => {
        let { coords } = position;
        let latitude = coords.latitude;
        let longitude = coords.longitude;

        this.setState({latitude, longitude});
      },
      error => {
        console.log(error);
      },
      {
        // timeout: 20000, // 20 sn konum almaya çalışma. 20 sn de alamazsa işlem iptal olacak. Default olarak sonsuz değerdir işlem iptal olmaz konumu alamazsa
        // maximumAge: 20000, // İzin verilen konumda 20 sn boyunca durur gibi gözükür izin verilen konumu 20 sn boyunca değiştirmez. Default olarak sürekli konum değişir.
        // enableHighAccuracy: true // GPS ile konum alma. False dersek wifi üzerinden alır.
      }
    )
  }


  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Latitude :</Text>
          <Text>{this.state.latitude}</Text>
        </View>

        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Longitude</Text>
          <Text>{this.state.longitude}</Text>
        </View>
      </View>
    );
  }
}

export default GeoLocationComponent;
