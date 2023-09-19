/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification, {Importance} from 'react-native-push-notification';

// PushNotification.createChannel(
//     {
//       channelId: "test-channel", // (required)
//       channelName: "My channel", // (required)
//     },
//     (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
// );

import {
  Platform,
  SafeAreaView,
  Text, TouchableOpacity,
} from 'react-native';





class App extends React.Component{

  componentDidMount() {
      PushNotification.createChannel(
          {
              channelId: "specialid", // (required)
              channelName: "Special messasge", // (required)
              channelDescription: "Notification for special message", // (optional) default: undefined.
              importance: 4, // (optional) default: 4. Int value of the Android notification importance
              vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
          },
          (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
      );
      PushNotification.localNotification({
          channelId:'specialid', //his must be same with channelid in createchannel
          title:'hello',
          message:'test message'
      })
  }


  sendNotification = () => {
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: "test-channel", // (required) channelId, if the channel doesn't exist, notification will not trigger.
      // actions: ["Yes", "No"], // (Android only) See the doc for notification actions to know more

      /* iOS and Android properties */
      title: "My Notification Title", // (optional)
      message: "My Notification Message", // (required)
    });
  }

  render() {
      return (
          <SafeAreaView>
            <TouchableOpacity onPress={this.sendNotification}>
              <Text>Send Notification</Text>
            </TouchableOpacity>
          </SafeAreaView>
      )
    }
}


// // Must be outside of any component LifeCycle (such as `componentDidMount`).
// PushNotification.configure({
//   // (optional) Called when Token is generated (iOS and Android)
//   onRegister: function (token) {
//     console.log("TOKEN:", token);
//   },
//
//   // (required) Called when a remote is received or opened, or local notification is opened
//   onNotification: function (notification) {
//     console.log("NOTIFICATION:", notification);
//
//     // process the notification
//
//     // (required) Called when a remote is received or opened, or local notification is opened
//     notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },
//
//   // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
//   onAction: function (notification) {
//     console.log("ACTION:", notification.action);
//     console.log("NOTIFICATION:", notification);
//
//     // process the action
//   },
//
//   // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//   // onRegistrationError: function(err) {
//   //   console.error(err.message, err);
//   // },
//
//   // IOS ONLY (optional): default: all - Permissions to register.
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },
//
//   // Should the initial notification be popped automatically
//   // default: true
//   popInitialNotification: true,
//
//   /**
//    * (optional) default: true
//    * - Specified if permissions (ios) and token (android and ios) will requested or not,
//    * - if not, you must call PushNotificationsHandler.requestPermissions() later
//    * - if you are not using remote notification or do not have Firebase installed, use this:
//    *     requestPermissions: Platform.OS === 'ios'
//    */
//   requestPermissions: true,
// });


export default App;

