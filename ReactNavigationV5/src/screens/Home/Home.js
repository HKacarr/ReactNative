import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                <Text>Go to Profile</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home;
