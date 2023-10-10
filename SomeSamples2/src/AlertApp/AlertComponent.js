import React, {Component} from 'react';
import {Button, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import { Root, Popup } from 'popup-ui'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

const openModal = () => {
    Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: 'Congrats! this is toast notification success',
    })
}

const AlertComponent = () => {
    return (
        <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <AlertNotificationRoot>
                <View>
                    <Button
                        title={'dialog box'}
                        onPress={() =>
                            Dialog.show({
                                type: ALERT_TYPE.SUCCESS,
                                title: 'Success',
                                textBody: 'Congrats! this is dialog box success',
                                button: 'close',
                            })
                        }
                    />
                    <Button
                        title={'toast notification'}
                        onPress={() =>
                            Toast.show({
                                type: ALERT_TYPE.SUCCESS,
                                title: 'Success',
                                textBody: 'Congrats! this is toast notification success',
                            })
                        }
                    />
                </View>
            </AlertNotificationRoot>
        </SafeAreaView>
    )
}

export default AlertComponent;
