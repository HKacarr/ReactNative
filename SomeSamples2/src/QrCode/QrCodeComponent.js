import React, {Component, useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const QrCodeComponent = () => {
    const [qrText, setQrText] = useState("");

    return (
        <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <TouchableOpacity style={{marginBottom: 10, backgroundColor: 'green', padding: 10, borderRadius: 10}}>
                <Text style={{color: 'white'}}>Scan</Text>
            </TouchableOpacity>

            <QRCodeScanner onRead={() => alert("Okundu")} />


            <TextInput
                onChangeText={(text) => setQrText(text)}
                style={{borderStyle: 'solid', borderWidth: 1, width: '80%', height: 40, borderRadius: 10, padding: 10, marginBottom: 10}}
            />

            {qrText != '' &&
                <QRCode
                    size={150}
                    value={qrText}
                />
            }

        </SafeAreaView>
    )
}

export default QrCodeComponent;
