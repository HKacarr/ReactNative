import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import * as NavigationService from '../../../services/navigator/NavigationService';

const RoomItem = ({item}) => {
    return (
        <TouchableOpacity onPress={() => NavigationService.navigate("RoomDetail", {roomName: item.roomName, userMail: item.userMail})} style={[roomItemStyles.item]}>
            <View style={{flexDirection: 'row'}}>
                <View>
                    <Text style={[roomItemStyles.roomName]}>{item.roomName}</Text>
                    <Text style={[roomItemStyles.userMail]}>{item.userMail}</Text>
                </View>
                <View style={{position: 'absolute', right: 0, top: 7}}><Icon name="arrow-circle-right" size={20} /></View>
            </View>
        </TouchableOpacity>
    );
}

const roomItemStyles = StyleSheet.create({
    item: {
        backgroundColor: "#ddd",
        width: "70%",
        marginTop: 15,
        marginBottom: 20,
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        padding: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    roomName: {
        fontSize: 16,
        fontWeight: 700
    },
    userMail: {
        fontSize: 12,
        fontWeight: 300
    }
})

export default RoomItem;
