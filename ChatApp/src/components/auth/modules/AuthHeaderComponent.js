import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class AuthHeaderComponent extends Component {
    render() {
        return (
            <View style={[styles.textView]}>
                <Text style={[styles.welcomeBackText]}>{this.props.bigTitle}</Text>
                <Text style={[styles.signInContinue]}>{this.props.subTitle}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    textView:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcomeBackText: {
        color: '#1C1939',
        textAlign: 'center',
        fontSize: 35,
        fontWeight: '700',
        paddingTop: 50
    },
    signInContinue: {
        color: 'rgba(28, 25, 57, 0.80)',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '400',
        paddingTop: 20
    },
});

export default AuthHeaderComponent;
