import React, {Component} from 'react';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import AuthHeaderComponent from './modules/AuthHeaderComponent';
import EmailInputComponent from './modules/EmailInputComponent';
import PasswordComponent from './modules/PasswordComponent';
import SubmitButtonComponent from './modules/SubmitButtonComponent';
import FooterTextComponent from './modules/FooterTextComponent';
import auth from '@react-native-firebase/auth';

import {Formik} from 'formik';
import * as Yup from 'yup';

const handleSubmit = (values, {navigation}) => {
    auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
            console.log('User account signed in!');
            navigation.navigate("Home");
        })
        .catch(error => {
            if (error.code === 'auth/invalid-email') {
                alert('That email address is invalid!');
            }

            if (error.code === 'auth/user-not-found') {
                alert('User Not Found!');
            }

            if (error.code === 'auth/wrong-password') {
                alert('Wrong E-Mail or Password!');
            }

            console.error(error);
        });
}


const LoginComponent = ({navigation}) => {
    return(
        <SafeAreaView style={[styles.loginBody]}>
            <AuthHeaderComponent bigTitle={"Welcome Back"} subTitle={"Sign in to continue"} />

            <View style={[styles.formView]}>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={
                        Yup.object().shape({
                            email: Yup.string().email('Invalid email!').required('E-Mail is required!'),
                            password: Yup.string().required('Password is Required!'),
                        })
                    }
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, isSubmitting }) => (
                        <View>
                            <EmailInputComponent emailError={errors.email} handleChange={handleChange} handleBlur={handleBlur} emailValue={values.email} />
                            <PasswordComponent passwordError={errors.password} handleChange={handleChange} handleBlur={handleBlur} loginState={true} passwordValue={values.password} />


                           <SubmitButtonComponent _handleSubmit={handleSubmit} isSubmittingAttr={isSubmitting} validAttr={isValid} buttonText={"Sign In"} />
                        </View>
                    )}
                </Formik>

                <FooterTextComponent explainText={"Don't have an account ? -"} linkText={"Sign Up"} navigation={navigation} redirectLink={"Register"} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loginBody: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    },
    formView: {
        paddingTop: 80
    },
    inputs: {
        forgotPasswordTextStyle: {
            marginLeft: 'auto',
            color: 'rgba(28, 25, 57, 0.80)',
            fontSize: 14,
            fontWeight: 400
        },
    }
});

export default LoginComponent;
