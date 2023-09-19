import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

class SubmitButtonComponent extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props._handleSubmit}
                // disabled={!this.props.validAttr || this.props.isSubmittingAttr}
                style={[styles.inputs.buttonViewStyle]}
            >
                <Text style={[styles.inputs.buttonTextStyle]}>{this.props.buttonText}</Text>
            </TouchableOpacity>
        );
    }
}
let styles = StyleSheet.create({
    inputs: {
        buttonViewStyle: {
            width: '100%',
            minWidth: 330,
            height: 60,
            backgroundColor: '#7165E3',
            borderRadius: 10,
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: 60
        },
        buttonTextStyle: {
            color: '#FFFFFF',
            textAlign: 'center',
            fontSize: 17,
            fontWeight: 700
        },
    }
})

export default SubmitButtonComponent;
