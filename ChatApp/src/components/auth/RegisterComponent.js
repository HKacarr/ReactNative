import React, {Component, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AuthHeaderComponent from './modules/AuthHeaderComponent';
import EmailInputComponent from './modules/EmailInputComponent';
import PasswordComponent from './modules/PasswordComponent';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import SubmitButtonComponent from './modules/SubmitButtonComponent';
import FooterTextComponent from './modules/FooterTextComponent';

import {Formik} from 'formik';
import auth, {firebase} from '@react-native-firebase/auth';
import * as Yup from 'yup';


const handleSubmit = (values, {navigation}) => {

    auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then(() => {
            console.log('User account created & signed in!');
            const user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: values.email
            }).then(r => {
               // console.log(r);
            });

            navigation.navigate("Home");
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                alert("E-Mail address already in use from other User");
            }

            if (error.code === 'auth/invalid-email') {
                alert("E-Mail Address is Invalid");
            }

            if (error.code === 'auth/weak-password'){
                alert("Weak Password");
            }

            console.error(error);
        });
}

const RegisterComponent = ({navigation}) => {
    const [checkedState, setCheckedState] = useState(false);


    return (
        <SafeAreaView
            style={{
                backgroundColor: '#fff',
                flex: 1,
                alignItems: 'center'
            }}
        >
            <AuthHeaderComponent bigTitle={"Welcome!"} subTitle={"Please provide following details for your new account"} />

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
                            {/*<TextInput style={[styles.commonInputs, styles.fullNameInput]} placeholder={"Full Name"} />*/}

                            <View>
                                <EmailInputComponent emailError={errors.email} handleChange={handleChange} handleBlur={handleBlur} emailValue={values.email} />
                            </View>

                            <PasswordComponent passwordValue={values.password} handleChange={handleChange} handleBlur={handleBlur} passwordError={errors.password} loginState={false} />

                            <View style={{flexDirection: 'row', width: '100%', maxWidth: 310}}>
                                <TouchableOpacity onPress={() => setCheckedState(!checkedState)}>
                                    <View style={{
                                        width: 32,
                                        height: 32,
                                        borderStyle: 'solid',
                                        borderWidth: 1,
                                        borderColor: '#7165E3',
                                        backgroundColor: 'rgba(113, 101, 227, 0.20)',
                                        borderRadius: 4,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        {checkedState && <Icon name="check" size={20} color="#7165E3" />}
                                    </View>
                                </TouchableOpacity>
                                <Text style={{fontSize: 13, fontWeight: 400, lineHeight: 18, letterSpacing: 0.347, paddingLeft:15}}>By creating your account you have to agree with our Teams and Conditions.</Text>
                            </View>

                            <SubmitButtonComponent _handleSubmit={handleSubmit} isSubmittingAttr={isSubmitting} validAttr={isValid} buttonText={"Sign Up"} />

                            <FooterTextComponent explainText={"Already have an Account ? -"} linkText={"Sign In"} navigation={navigation} redirectLink={"Login"} />
                        </View>
                    )}
                </Formik>
            </View>
        </SafeAreaView>
    );
}

let styles = StyleSheet.create({
    formView: {
        paddingTop: 80,
    },
    commonInputs: {
        width: '100%',
        minWidth: 340,
        height: 'auto',
        minHeight: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        marginBottom: 20,
        padding: 15,
    },
    fullNameInput: {
        width: '100%',
        minWidth: 340,
        height: 50,
        backgroundColor: '#F7F7F7',
        borderWidth: 1,
        borderColor: '#F7F7F7',
        borderStyle: 'solid',
    }
})

export default RegisterComponent;
