import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {boolean} from 'yup';
import PropTypes from 'prop-types';

class PasswordComponent extends Component {
    constructor() {
        super();
        this.state = {
            hidePassword: true,
            iconState: true
        }
    }



    render() {
        return (
            <View style={{paddingBottom: 20}}>
                <TextInput
                    onChangeText={this.props.handleChange('password')}
                    onBlur={this.props.handleBlur('password')}
                    value={this.props.passwordValue}
                    secureTextEntry={this.state.hidePassword}
                    style={[styles.inputs.passwordInputs, styles.inputs.commonInputs]}
                    placeholder="Password"
                />
                {(this.props.passwordError) && <Text style={{color: 'red'}}>{this.props.passwordError}</Text>}

                <Icon onPress={() => this.setState({hidePassword: !this.state.hidePassword, iconState: !this.state.iconState})} style={[styles.inputs.iconStyle]} name={this.state.iconState ? "eye" : "eye-slash"} size={20} color="#CECECE" />
                {this.props.loginState
                    ? <TouchableOpacity>
                    <Text style={[styles.inputs.forgotPasswordTextStyle]}>Forgot Password ?</Text>
                </TouchableOpacity>
                :
               ""
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputs: {
        passwordInputs: {
            backgroundColor: '#F7F7F7',
            borderWidth: 1,
            borderColor: '#F7F7F7',
            borderStyle: 'solid'
        },
        iconStyle: {
            position: 'absolute',
            right: 15,
            alignContent: 'center',
            top: 13
        },
        forgotPasswordTextStyle: {
            marginLeft: 'auto',
            color: 'rgba(28, 25, 57, 0.80)',
            fontSize: 14,
            fontWeight: 400
        },
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
    },
});

PasswordComponent.propTypes = {
    loginState: PropTypes.bool
}

PasswordComponent.defaultProps = {
    loginState: true
}

export default PasswordComponent;
