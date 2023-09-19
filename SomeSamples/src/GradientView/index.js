import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const GradientView = () => {
    return (
        <SafeAreaView>
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={{flex:1, padding: 50}}
            />
        </SafeAreaView>
    )
}

export default GradientView;
