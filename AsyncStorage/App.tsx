import React, {Component} from 'react';
import {SafeAreaView, Text} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class App extends Component {

    componentDidMount = async () => {
        // AsyncStorage.setItem("test_key", "Hasan Kacar");
        // AsyncStorage.getItem("test_key").then((res) => {
        //     console.log(res);
        // })

        const asyncStorageValue = await AsyncStorage.getItem("test_key");
        console.log(asyncStorageValue);
    }



    render() {
        return (
            <SafeAreaView>
              <Text>Hasan Kacar</Text>
            </SafeAreaView>
        );
    }
}

export default App;
