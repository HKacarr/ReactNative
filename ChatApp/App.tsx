import * as React from 'react';
import {useEffect, useState} from "react";
import {View, Text, TouchableOpacity, Button} from 'react-native';


/** Navigation */
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/** End */



/** Firebase */
import auth, {firebase} from '@react-native-firebase/auth';
/** End */




/** Socket */
import io from 'socket.io-client/dist/socket.io';

const connectionConfig = {
    jsonp: false,
    reconnection: true,
    reconnectionDelay: 100,
    reconnectionAttempts: 1000,
    transports: ['websocket']
};
/** */





/** Components */
import LoginComponent from "./src/components/auth/LoginComponent";
import RegisterComponent from "./src/components/auth/RegisterComponent";
import HomeComponent from "./src/components/pages/home/HomeComponent";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import ChatRoomComponent from "./src/components/pages/chat/ChatRoomComponent";
import RoomDetailComponent from "./src/components/pages/chat/RoomDetailComponent";
import {navigationRef} from "./src/services/navigator/NavigationService";
// import HomeComponent from "./src/components/pages/home/HomeComponent";
/** End */


const Stack = createNativeStackNavigator();

function App() {
    const [loggedUser, setLoggedUser] = useState(false);


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
           if(user){
               setLoggedUser(true);
           }else{
               setLoggedUser(false);
           }
        });
    }, []);


    // const logout = () => {
    //     auth()
    //         .signOut()
    //         .then(() => console.log('User signed out!'));
    //
    //     navigation.navigate("Login");
    // }

    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <Stack.Navigator>
                {
                    !loggedUser
                    ?
                    (
                    <>
                        <Stack.Screen name="Login" component={LoginComponent} options={{headerShown: false}} />
                        <Stack.Screen name="Register" component={RegisterComponent} options={{headerShown: false}} />
                    </>
                    )
                    :
                        (
                            <>
                                <Stack.Screen
                                    name="Home"
                                    component={HomeComponent}
                                    options={{
                                        headerTitle: "Home",
                                        headerRight: () => (
                                            <TouchableOpacity onPress={() => {
                                                auth()
                                                    .signOut()
                                                    .then(() => console.log('User signed out!'));
                                            }}>
                                                <Icon name={"sign-out"} size={25} />
                                            </TouchableOpacity>
                                        )
                                    }}
                                />
                                <Stack.Screen
                                    name="ChatRoom"
                                    component={ChatRoomComponent}
                                    options={{
                                        headerTitle: "Chat Room",
                                    }}
                                />

                                <Stack.Screen
                                    name="RoomDetail" component={RoomDetailComponent}
                                    options={({ route, navigation }) => ({
                                        headerTitle: route.params.roomName,
                                        headerStyle: {
                                            backgroundColor: '#212121',
                                        },
                                        headerTitleStyle: {
                                            fontWeight: 600,
                                            color: "#9E9E9E"
                                        },
                                        headerBackVisible: false,
                                        headerRight: () => (
                                            <TouchableOpacity onPress={route.params._handleDelete}>
                                                <Icon name={"trash"} size={25} style={{color: "#9E9E9E"}} />
                                            </TouchableOpacity>
                                        ),
                                        headerLeft: () => (
                                            <TouchableOpacity onPress={() => {
                                                let socket = io('http://localhost:3000', connectionConfig);
                                                socket.on('connect', () => {
                                                    socket.emit('leave-room', route.params.roomName);
                                                    socket.on('leave-room-view', (data) => {
                                                        // console.log("asfasfafasf", data.count);
                                                    });
                                                });
                                                navigation.navigate("Home")
                                            }}>
                                                <Icon name={"arrow-left"} size={25} style={{color: "#9E9E9E"}} />
                                            </TouchableOpacity>
                                        ),
                                    })} />
                            </>
                        )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
