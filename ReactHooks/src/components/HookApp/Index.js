import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HookApp = () => {
    const [titleVal, setTitle] = useState("");
    const [urlVal, setUrl] = useState("");
    const [allData, setAllData] = useState([]);
    const [isRefresh, setIsRefresh] = useState(false);

    const saveItem = async () => {
        let dataId = Math.floor(Math.random() * 10000);
        console.log(dataId);


        let newItem = {
            id: dataId,
            title: titleVal,
            url: urlVal
        };

        const oldData = [...allData];
        oldData.push(newItem);
        setAllData(oldData);

        await AsyncStorage.setItem('all_data', JSON.stringify(allData));
        setIsRefresh(true);
    }


    useEffect( () => {
        // AsyncStorage.removeItem('all_data');

        AsyncStorage.getItem('all_data').then((res) => {
            if (res !== null){
                setAllData(JSON.parse(res));
            }
        }).catch((err) => {
            console.log(allData.length);
        });
    }, [isRefresh]);


    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flexDirection: 'row', padding: 10, gap: 10, marginTop: 10}}>
                <TextInput onChangeText={(text) => setTitle(text)} style={{width: '40%', borderStyle: 'solid', borderWidth: 1, padding: 7}}/>
                <TextInput onChangeText={(text) => setUrl(text)} style={{width: '40%', borderStyle: 'solid', borderWidth: 1, padding: 7}}/>
                <TouchableOpacity onPress={saveItem} style={{borderWidth: 1, borderStyle: 'solid', padding: 5}}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
                {
                    allData.length > 0 ?
                        allData.map((data) => {
                            return (
                                <View id={data.id} style={{flexDirection: 'row', borderStyle: 'solid', borderWidth: 1, width: '80%', justifyContent: 'center', marginTop: 10, padding: 10}}>
                                    <Text>{data.title}</Text>
                                    <Text>{data.url}</Text>
                                </View>
                            )
                        }) : <Text>Data not Found</Text>
                }
            </View>


        </SafeAreaView>
    )
}

export default HookApp;
