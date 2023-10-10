import React, {Component, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";



const Index = () => {

    const [isValidCardNumber, setIsValidCardNumber] = useState(false);
    const [isValidExpiry, setValidExpiry] = useState(false);
    const [isValidCvc, setIsValidCvc] = useState(false);
    const [isValidName, setIsValidName] = useState(false);


    const _onChange = (form) => {
        if(form.status.number == "valid"){
            setIsValidCardNumber(true);
        }else{
            setIsValidCardNumber(false);
        }

        if(form.status.expiry  == "valid"){
            setValidExpiry(true)
        }else{
            setValidExpiry(false)
        }

        if(form.status.cvc == "valid"){
            setIsValidCvc(true);
        }else{
            setIsValidCvc(false)
        }

        if(form.status.name == "valid"){
            setIsValidName(true);
        }else{
            setIsValidName(false);
        }

        console.log(form)
    }

    return (
        <SafeAreaView>
            <CreditCardInput
                onChange={_onChange}
                invalidColor={"blue"}
                validColor={"green"}
                requiresName={true}
            />

            <View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <View><Text style={{fontWeight: '700'}}>Is Valid Card Number : </Text></View>
                    <View><Text style={{color: isValidCardNumber ? 'green' : 'red', fontWeight: 700}}>{isValidCardNumber ? "Card Number Valid" : "Invalid Card Number"}</Text></View>
                </View>

                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <View><Text style={{fontWeight: '700'}}>Is Valid Expiry Date : </Text></View>
                    <View><Text style={{color: isValidExpiry ? 'green' : 'red', fontWeight: 700}}>{isValidExpiry ? "Expiry Date Valid" : "Invalid Expiry Date"}</Text></View>
                </View>

                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <View><Text style={{fontWeight: '700'}}>Is Valid CVC : </Text></View>
                    <View><Text style={{color: isValidCvc ? 'green' : 'red', fontWeight: 700}}>{isValidCvc ? "CVC Valid" : "Invalid CVC"}</Text></View>
                </View>

                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <View><Text style={{fontWeight: '700'}}>Is Valid CVC : </Text></View>
                    <View><Text style={{color: isValidName ? 'green' : 'red', fontWeight: 700}}>{isValidName ? "Name Surname Valid" : "Invalid Name Surname"}</Text></View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Index;
