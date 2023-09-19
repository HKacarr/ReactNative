import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AuthHeaderComponent from '../../auth/modules/AuthHeaderComponent';
import {Formik} from 'formik';
import SubmitButtonComponent from '../../auth/modules/SubmitButtonComponent';
import * as Yup from 'yup';
import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class ChatRoomComponent extends Component {
    render() {
        const handleSubmit = (values, {resetForm}) => {
            const user = firebase.auth().currentUser;

            let email = user.email;

            const chatRoomRef = database().ref('/chatRooms').push();

            chatRoomRef
                .set({
                    chatRoomName: values.chatRoomName,
                    userMail: user.email,
                    roomId: chatRoomRef.key
                })
                .then(() => this.props.navigation.navigate("Home"));

            resetForm({values:''});

        }

        return (
            <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
                <AuthHeaderComponent bigTitle="Create Chat Room" subTitle="You can create a new Chat Room for communication" />
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")} style={{marginTop: 20, borderStyle: 'dashed', borderRadius: 8, borderWidth: 1, padding: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="wechat" size={22} />
                        <Text style={{fontSize: 16, marginLeft: 7, fontWeight: 500}}>Room List</Text>
                    </View>
                </TouchableOpacity>
                <Formik
                    initialValues={{ chatRoomName: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={
                        Yup.object().shape({
                            chatRoomName: Yup.string().required('Chat Room Name is required!'),
                        })
                    }
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View>
                            <TextInput
                                id="chat_room_name_input"
                                onChangeText={handleChange('chatRoomName')}
                                onBlur={handleBlur('chatRoomName')}
                                placeholder="Chat Room Name"
                                value={values.chatRoomName}
                                style={[styles.inputs.commonInputs, styles.inputs.chatRoomNameInput]}
                            />
                            {(errors.chatRoomName) && <Text style={{color: 'red'}}>{errors.chatRoomName}</Text>}
                            <SubmitButtonComponent _handleSubmit={handleSubmit} buttonText="Save" />
                        </View>
                    )}
                </Formik>
            </SafeAreaView>
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
        chatRoomNameInput:{
            marginTop: 60
        }
    }
});

export default ChatRoomComponent;
