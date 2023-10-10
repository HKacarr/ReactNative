import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const CustomFontComponent = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontFamily: 'YoungSerif-Regular'}}>Hello, World!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustomFontComponent;
