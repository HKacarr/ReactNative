import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Index = () => {
    const [numberVal, setNumberVal] = useState(0);

    const increaseVal = () => {
        let newNumberVal = numberVal + 1;
        setNumberVal(newNumberVal);
    }

    const decreaseVal = () => {
        let newNumberVal = numberVal - 1;
        setNumberVal(newNumberVal);
    }


    return (
        <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
                <TouchableOpacity onPress={increaseVal} style={[styles.buttons]}>
                    <Text style={[styles.textFont]}>+</Text>
                </TouchableOpacity>
            </View>


            <View style={{marginTop: 20, marginBottom: 20}}>
                <Text style={[styles.textFont]}>{numberVal}</Text>
            </View>



            <View>
                <TouchableOpacity onPress={decreaseVal} style={[styles.buttons]}>
                    <Text style={[styles.textFont]}>-</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textFont: {
        fontSize: 24
    },
    buttons: {
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 7,
        borderRadius: 7,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Index;
