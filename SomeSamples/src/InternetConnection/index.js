import React, {Component, useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';


const Index  = () => {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        NetInfo.fetch().then((state) => {
            console.log('Connection Type : ' + state.type);
            console.log('Is Connected : ' + state.isConnected);

            if (state.isConnected){
                setIsConnected("Connection True");
            }else{
                setIsConnected("Connection False");
            }
        }).catch((error) => {
            console.log("Error : " + error);
        });


        // NetInfo.addEventListener(state => {
        //     console.log(state.isConnected);
        //     setIsConnected(state.isConnected);
        // });



    });
    return (
        <SafeAreaView>
            <Text>Internat Connection Control</Text>
            <Text>Is Connected : {isConnected}</Text>
        </SafeAreaView>
    )
}

export default Index;
