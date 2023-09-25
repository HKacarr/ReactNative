import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Share} from 'react-native';

const shareEvent = () => {
    const message = `I saw a beautiful application. You should try...`;
    Share.share({
        message:'React Native | A framework for building native apps using React',
    }).then((res) => {
        console.log(res);
    }).catch((error) => {
        console.error(error);
    })
}

const Index = () => {

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={shareEvent}>
                    <Text>Share</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Index;
