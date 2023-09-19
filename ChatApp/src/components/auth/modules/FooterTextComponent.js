import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

class FooterTextComponent extends Component {
    render() {
        return (
            <View style={[styles.signUpArea.signUpView]}>
                <Text style={[styles.signUpArea.haveAccountText, styles.signUpArea.commonText]}>{this.props.explainText}</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.redirectLink)}>
                    <Text style={[styles.signUpArea.signUpText, styles.signUpArea.commonText]}>{this.props.linkText}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    signUpArea: {
        signUpView: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        signUpText: {
            fontWeight: 700
        },
        haveAccountText: {
            fontWeight: 400
        },
        commonText: {
            fontSize: 15,
            color: 'rgba(28, 25, 57, 0.80)',
            textAlign: 'center',
            paddingVertical: 30
        }
    }
})

export default FooterTextComponent;
