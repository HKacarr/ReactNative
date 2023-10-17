import React, {Component, useEffect, useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import axios from 'axios';

const SwitchCurrency = () => {

    const [tlVal, setTlVal] = useState(0);
    const [usdVal, setUsdVal] = useState(0);
    const [euroVal, setEuroVal] = useState(0);
    const [euroResult, setEuroResult] = useState(0);
    const [usdResult, setUsdResult] = useState(0);

    useEffect(() => {
        axios.get('https://finans.truncgil.com/today.json').then((result) => {
            setUsdVal(result.data.USD.Alış);
            setEuroVal(result.data.EUR.Alış);
        }).catch((err) => {
            console.log("Err : " + err.message);
        });
    })

    const _onChangeText = (data) => {

        if (data == ""){
            setTlVal(0);
            setUsdResult(0);
            setEuroResult(0);
        }else{
            setTlVal(data);

            let fromTlToUsd = (parseInt(tlVal) / parseInt(usdVal)) * 10;
            let fromTlToEur = (parseInt(tlVal) / parseInt(euroVal)) * 10;

            setUsdResult(fromTlToUsd);
            setEuroResult(fromTlToEur);
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            {/* Header Area - Start */}
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 24, fontWeight: 700, marginTop: 20}}>Switch Currency</Text>
            </View>
            {/* Header Area - End */}



            {/* Input Area - Start */}
            <View style={{alignItems: 'center', marginTop: 50}}>
                <TextInput onChangeText={_onChangeText} style={{borderStyle: 'solid', borderWidth: 1, width: '80%', padding: 13, borderRadius: 10}} placeholder="Enter your Turkish Liras Value"></TextInput>
            </View>
            {/* Input Area - End */}



            {/* Currency Result Area - Start */}
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text>Dolar : {usdResult.toFixed(2)}</Text>
                <Text>Euro : {euroResult.toFixed(2)}</Text>
            </View>
            {/* Currency Result Area - Start */}
        </SafeAreaView>
    )
}

export default SwitchCurrency;
