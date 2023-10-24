import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const Index = () => {

    const [postDatas, setPostDatas] = useState({});
    const [isRefresh, setIsRefresh] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setPostDatas(json);
                setIsRefresh(true);
            })
            .catch(err => console.error(err));
    }, [isRefresh]);

    return (
        <SafeAreaView style={{flex: 1}}>
            {postDatas.length > 0 ? postDatas.map(data => {
                return (
                    <Text key={data.id}>{data.id + " - " + data.title}</Text>
                )
            }) : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Loading...</Text></View>}
        </SafeAreaView>
    )
}

export default Index;
