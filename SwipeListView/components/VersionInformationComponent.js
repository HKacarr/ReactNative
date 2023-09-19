import React, {Component, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import VersionInfo from 'react-native-version-info';
import {Platform} from 'react-native';

const VersionInformationComponent = () => {

    useEffect(() => {
         console.log(Platform);
    });

    return (
        <SafeAreaView>
            <Text style={{
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 700
            }}
            >App Version Information</Text>
            <View>
                <Text>Version Number : {VersionInfo.appVersion}</Text>
                <Text></Text>
                <Text></Text>
            </View>
        </SafeAreaView>
    )
}

export default VersionInformationComponent;
