import React, {Component, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MessageComponent from './MessageComponent';
import io from 'socket.io-client/dist/socket.io';
import {firebase} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const connectionConfig = {
    jsonp: false,
    reconnection: true,
    reconnectionDelay: 100,
    reconnectionAttempts: 1000,
    transports: ['websocket']
};



const RoomDetailComponent = ({route, navigation}) => {
    const [messageText, setMessageText] = useState("");
    const [roomName, setRoomName] = useState("");
    const [roomId, setRoomId] = useState(null);
    const [messageDatas, setMessageDatas] = useState([]);
    const [connectedUserCount, setConnectedUserCount] = useState(0);

    let _handleDelete = async () => {

        database()
            .ref('/chatRooms')
            .once('value')
            .then(datas => {
                datas.forEach((d) => {
                    let dRoomName = d.toJSON().chatRoomName;
                    if(dRoomName === roomName){
                        database().ref(`/chatRooms/${d.toJSON().roomId}`).remove();
                    }
                });
            });

        await database().ref(`/messages/${roomName}`).remove();

        navigation.goBack();
    }

    useEffect(() => {
        setRoomName(route.params.roomName);
        let socket = io('http://localhost:3000', connectionConfig);
        let currentUser = firebase.auth().currentUser;
        let currentUserMail = currentUser.email;


        database()
            .ref('/chatRooms')
            .once('value')
            .then(datas => {
                datas.forEach((d) => {

                    if(roomName == d.toJSON().chatRoomName){
                        console.log(d.toJSON().roomId);
                        setRoomId(d.toJSON().roomId);
                    }
                });
            });

        socket.on('connect', () => {
            socket.emit('connection-room', {roomName});
            socket.on('connection-room-view', (data) => {
                setConnectedUserCount(data.count);
            });
        });

        navigation.setParams({_handleDelete: _handleDelete})

        // socket.on('hello', () => {
        //     alert("Hello World!");
        // });

        database()
            .ref(`/messages/${roomName}`)
            .once('value')
            .then(messages => {
                messages.forEach((d) => {
                    let user = firebase.auth().currentUser;
                    let newData = {
                        isSender: user.email == d.toJSON().userMail ? true : false,
                        message: d.toJSON().messageText
                    };

                    setMessageDatas(oldArray => [...oldArray, newData]);


                    // newData.push({
                    //     userMail: d.toJSON().userMail,
                    //     messageText: d.toJSON().messageText,
                    //     userId: d.toJSON().userId
                    // });

                });
            });

        console.log(messageDatas);
    }, [roomName]);


    // const messageDatas = [
    //     {isSender: true, message: "Deneme"},
    //     {isSender: false, message: "Test"},
    //     {isSender: true, message: "Yeni"},
    //     {isSender: true, message: "Rewact Native"},
    //     {isSender: false, message: "Yazılım"},
    // ];

    let _renderItem = (message, isSender) => {
        // console.log(item);
        if(message != undefined){
            return <MessageComponent messageContent={message} isSender={isSender} />
        }
    }

    let handleSend = () => {

        const user = firebase.auth().currentUser;
        const userId = user.uid;
        const userMail = user.email;



        var database = firebase.database().ref(`/messages/${roomName}`);
        console.log(roomId);
        database.push({
            roomName,
            messageText,
            userId,
            userMail,
            roomId
        }).then((res) => {
            let newMessage = {
                isSender: true,
                message: messageText
            }

            let oldArr = [...messageDatas.reverse(), newMessage]
            setMessageDatas(oldArr.reverse());
            // setMessageDatas(oldArr => [...oldArr, newMessage]);
            setMessageText('');
        }).catch((err) => {
            console.log(err);
            setMessageText('');
        })
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{
                flex: 1,
                backgroundColor: '#BDBDBD',
                paddingBottom: 15
            }}>
                <View style={{backgroundColor: '#37474F', justifyContent: 'center', alignItems: 'center', padding: 10}}>
                    <Text style={{color: '#FFF', fontSize: 16, fontWeight: 700}}>Connected Users : {connectedUserCount}</Text>
                </View>
                <FlatList
                    inverted
                    // ref={(ref) => this.flatListRef = ref}
                    data={messageDatas}
                    renderItem={({item}) => _renderItem(item.message, item.isSender)}
                />
            </View>

            <View style={{
                flexDirection: 'column',
                justifyContent: 'flex-end',
                backgroundColor: '#212121',
                padding: 15
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="plus" size={22} color="#546E7A" />
                    <View>
                        <TextInput value={messageText} id="messageInput" onChangeText={(text) => setMessageText(text)} multiline={true} style={{
                            backgroundColor: '#9E9E9E',
                            width: 300,
                            maxWidth: 300,
                            textAlign: 'auto',
                            marginLeft: 10,
                            paddingTop: 10,
                            paddingLeft: 10,
                            paddingBottom: 10,
                            paddingRight: 40,
                            borderRadius: 15,
                            borderStyle: 'solid',
                            borderWidth: .5,
                            borderColor: '#E0E0E0',
                            fontSize: 16
                        }}
                        />
                        <Icon name="file" size={22} color="#546E7A" style={{position: 'absolute', right: 10, bottom: 9}} />
                    </View>
                    <TouchableOpacity onPress={handleSend}>
                        <Icon name="send" size={22} color="#546E7A" style={{marginLeft: 15}} />
                    </TouchableOpacity>
                    <Icon name="camera" size={22} color="#546E7A" style={{marginLeft: 15}} />
                    {/*<Icon name="microphone" size={22} color="#546E7A" style={{marginLeft: 15}} />*/}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RoomDetailComponent;
