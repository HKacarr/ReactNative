import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from "react-native";
import io from "socket.io-client/dist/socket.io";

const socket = io('http://localhost:3001', {
    jsonp: false,
    reconnection: true,
    reconnectionDelay:100,
    reconnectionAttempts: 10000,
    transports: ["websocket"]
});

function App(): JSX.Element {
    const [currency, setCurrency] = useState();

    useEffect(() => {
       socket.on('connect', function (){
          console.log("Socket connected");
       });

       socket.on('react-send-data', (data) => {
           setCurrency(data.currency);
       })
    });

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{textAlign: 'center'}}>Anlık Kur Güncelleniyor</Text>
          <Text style={{fontSize: 24, fontWeight: 700}}>{currency ?? 0}</Text>
      </View>
    </SafeAreaView>
  );
}


export default App;
