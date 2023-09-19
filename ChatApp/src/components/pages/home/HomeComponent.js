import React, {Component, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';
import RoomItem from './RoomItem';


function HomeComponent({navigation})
{

    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        var roomDatas = [];
        database()
            .ref('/chatRooms')
            .once('value')
            .then(chatRooms => {
                let newData = [];
                chatRooms.forEach((d) => {
                    newData.push({
                        roomName: d.toJSON().chatRoomName,
                        userMail: d.toJSON().userMail,
                    });

                });
                setRooms(newData);
            });
    });

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}} onPress={() => navigation.navigate('ChatRoom')}>
                    <View style={{flexDirection: 'row', borderStyle: 'dashed', borderRadius: 8, borderWidth: 1, padding: 10}}>
                        <Icon name={"plus"} size={20} />
                        <Text style={{fontSize: 16, fontWeight: '600', marginLeft: 10, marginTop: 0}}>Chat Rooms</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center', marginTop: 50, flexDirection: 'row', justifyContent: 'center'}}>
                <Icon name={"wechat"} size={25} />
                <Text style={{fontSize: 18, fontWeight: "700", marginLeft: 10}}>Room List</Text>
            </View>

            <FlatList data={rooms} renderItem={({item}) => <RoomItem item={item} />} />
        </SafeAreaView>
    );
}


// class HomeComponent extends Component {
//     constructor() {
//         super();
//         this.state = {
//             rooms: []
//         }
//     }
//
//     componentDidMount() {
//
//     }
//
//     render() {
//         console.log(1);
//         // console.log("Rooms", this.state.rooms)
//
//     }
// }

export default HomeComponent;
