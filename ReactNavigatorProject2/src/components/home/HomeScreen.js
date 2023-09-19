import React, {Component} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home Screen</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {
                    id: 5,
                    name: "Hasan Kacar"
                })}>
                    <Text>Go to Detail Screen</Text>
                </TouchableOpacity>

                <Button title="Go to Home Again" onPress={() => this.props.navigation.push("Home")} />
                <Button title="Go to Back" onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}

export default HomeScreen;
