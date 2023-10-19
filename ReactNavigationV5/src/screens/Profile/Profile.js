import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const Profile = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>Profile Page</Text>
            <TouchableOpacity onPress={() => navigation.navigate("home")}>
                <Text>Go to Home Page</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Profile;
