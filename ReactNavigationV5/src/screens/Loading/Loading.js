import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

const Loading = ({navigation}) => {
    const [isLogged, setIsLogged] = useState(true);

    useEffect(() => {
        isLogged ? navigation.navigate("App") : navigation.navigate("Auth")
    });


    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Loading</Text>
        </SafeAreaView>
    )
}

export default Loading;
