import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class DetailScreen extends Component {
    componentDidMount() {
        alert("You are in the Detail Screen");
    }

    render() {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Detail Screen</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home', {
                    id: 5,
                    name: "Hasan Kacar"
                })}>
                    <Text>Go to Home Screen</Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={() => this.props.navigation.popToTop()}>
                    <Text>PoptoTop Deneme</Text>
                </TouchableOpacity>



                <Text>ID : {this.props.route.params.id}</Text>
                <Text>Name : {this.props.route.params.name}</Text>
            </View>
        );
    }
}

export default DetailScreen;
