import React from 'react';

/** Navigation Imports - Start */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createSwitchNavigator} from '@react-navigation/compat';
/** Navigation Imports - End */



/** Pages - Start */
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login';
import Loading from '../Loading/Loading';
/** Pages - End */


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"home"} component={Home} />
            <Stack.Screen name={"profile"} component={Profile} />
        </Stack.Navigator>
    )
}


const LoadingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"loading"} component={Loading} />
        </Stack.Navigator>
    )
}


const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"login"} component={Login} />
        </Stack.Navigator>
    )
}

const SwitchStack = createSwitchNavigator({
    "App": AppStack,
    "Auth": AuthStack,
    "Loading": LoadingStack,
}, {
    initialRouteName: "Loading"
})


const isLogged = false;


const AppNavigationContainer = () => {
    return (
        <NavigationContainer>
            <SwitchStack />
            {/*{isLogged ? <AppStack /> : <AuthStack />}*/}
            {/*<AuthStack />*/}

            {/*<Stack.Navigator initialRouteName={"home"}>*/}
            {/*    <Stack.Screen name={"home"} component={Home} />*/}
            {/*    <Stack.Screen name={"profile"} component={Profile} />*/}
            {/*</Stack.Navigator>*/}


            {/*<BottomTab.Navigator>*/}
            {/*    <BottomTab.Screen name={"home"} component={Home} />*/}
            {/*    <BottomTab.Screen name={"profile"} component={Profile} />*/}
            {/*</BottomTab.Navigator>*/}

            {/*<Drawer.Navigator drawerPosition={"right"}>*/}
            {/*    <Drawer.Screen name={"home"} component={Home} />*/}
            {/*    <Drawer.Screen name={"profile"} component={Profile} />*/}
            {/*</Drawer.Navigator>*/}
        </NavigationContainer>
    );
}

export default AppNavigationContainer;
