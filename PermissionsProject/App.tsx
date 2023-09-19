import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";
import {
  check,
  checkMultiple,
  PERMISSIONS,
  RESULTS,
  request,
  requestMultiple,
  openSettings,
  checkNotifications,
  requestNotifications
} from "react-native-permissions";
import { useEffect } from "react";
import { Platform } from "react-native";

function App(){
  useEffect(() => {
    const microphonePermission = Platform.select({
        android: PERMISSIONS.ANDROID.RECORD_AUDIO,
        ios: PERMISSIONS.IOS.MICROPHONE
    });

    const cameraPermission = Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA
    });


    requestNotifications(['alert', 'sound']).then(({status, settings}) => {
        console.log(status, settings);
    });


    checkNotifications().then(({status, settings}) => {
      console.log(status, settings);
    });

    // check(microphonePermission).then((res) => {
    //   if(res == "blocked"){
    //     openSettings().catch((err) => {
    //       console.log(err);
    //     });
    //   }
    // }).catch((err) => {
    //     console.log(err);
    // });

    // requestMultiple([microphonePermission, cameraPermission]).then((res) => {
    //   console.log(res);
    // }).catch((err) => {
    //   console.log(err);
    // });

    // request(cameraPermission).then((res) => {
    //   if (res == "granted"){
    //     console.log("Camera permission granted");
    //   }
    // })


    // checkMultiple([cameraPermission, microphonePermission])
    //   .then((res) => {
    //     console.log(res[cameraPermission]);
    //     console.log(res[microphonePermission]);
    //
    //
    //     // console.log("IOS Microphone Status : " + res['ios.permission.MICROPHONE']);
    //     // console.log("IOS Camera Status : " + res['ios.permission.CAMERA']);
    //   }).catch((e) => {
    //     console.log(e)
    // });


    // check(Platform.select({
    //   android: PERMISSIONS.ANDROID.CAMERA,
    //   ios: PERMISSIONS.IOS.CAMERA
    // })).then((res) => {
    //   console.log(res);
    // }).catch((e) => {
    //   console.log(e);
    // });



    // check(PERMISSIONS.IOS.CAMERA).then((res) => {
    //   console.log(res);
    // }).catch((e) => {
    //   console.log(e);
    // })
  })

  return (
    <SafeAreaView>
      <Text>Hasan Kacar</Text>
    </SafeAreaView>
  );
}



// class App extends Component {
//
//
//
//   // componentDidMount() {
//   //   check(PERMISSIONS.IOS.CAMERA).then((result) => {
//   //     console.log(result);
//   //   }).catch((err) => {
//   //     console.log(err);
//   //   })
//   // }
//
//
//   render() {
//
//   }
// }

export default App;
