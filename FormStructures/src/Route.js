import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import login from './screens/auth/Login';
import Register from './screens/auth/Register';

class Route extends Component {
    render() {
        const Stack = createNativeStackNavigator();
        const loginOptions = {
            title: null,
            headerStyle: { backgroundColor: "#fff", borderBottomWidth: 0 },
            headerShadowVisible: false
        }

        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={login} options={loginOptions} />
                    <Stack.Screen name="Register" component={Register} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Route;
