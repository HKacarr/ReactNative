import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

function MessageComponent(props){
    return (
        <View style={[props.isSender ? styles.senderView : styles.receiverView]}>
            <View style={[styles.commonMessageBox, props.isSender ? styles.sender : styles.receiver]}>
                <Text style={[styles.commonText]}>{props.messageContent}</Text>
            </View>
        </View>
    );
}

let styles = StyleSheet.create({
    senderView: {
        alignItems: 'flex-end',
        marginRight: 5
    },
    receiverView: {
        alignItems: 'flex-start',
        marginLeft: 5
    },
    receiver: {
        backgroundColor: "#9E9E9E",
    },
    sender: {
        backgroundColor: "#2E7D32",
    },
    commonMessageBox: {
        padding: 10,
        width: '100%',
        maxWidth: 170,
        marginTop: 10,
        marginLeft: 7,
        borderRadius: 12,
    },
    commonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: 600
    }
})

export default MessageComponent;
