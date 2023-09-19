import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

class EmailInputComponent extends Component {
    render() {
        return (
            <View style={{paddingBottom: 20}}>
                <TextInput
                    onChangeText={this.props.handleChange('email')}
                    onBlur={this.props.handleBlur('email')}
                    value={this.props.emailValue}
                    style={[styles.inputs.emailInputs, styles.inputs.commonInputs]}
                    placeholder="E-Mail"
                />
                {(this.props.emailError) && <Text style={{color: 'red'}}>{this.props.emailError}</Text>}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    inputs: {
        commonInputs: {
            width: '100%',
            minWidth: 340,
            height: 'auto',
            minHeight: 50,
            borderRadius: 10,
            borderWidth: 1,
            borderStyle: 'solid',
            marginBottom: 5,
            padding: 15,
        },
        emailInputs: {
            borderColor: '#7165E3',
            backgroundColor: 'rgba(113, 101, 227, 0.20)'
        },
    }
});

export default EmailInputComponent;
