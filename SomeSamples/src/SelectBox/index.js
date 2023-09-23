import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Select2 from 'react-native-select-two';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Index = () => {
    const mockData = [
        { id: 1, name: "React Native Developer", checked: true }, // set default checked for render option item
        { id: 2, name: "Android Developer" },
        { id: 3, name: "iOS Developer" }
    ]

    return (
        <SafeAreaView>
            <View>
                <Select2
                    style={{ borderRadius: 5 }}
                    colorTheme="blue"
                    popupTitle="SelectBox Sample"
                    title="Select item"
                    data={mockData}
                    onSelect={data => {
                        console.log(data);
                    }}
                    onRemoveItem={data => {
                        console.log(data);
                    }}
                    cancelButtonText={"Cancel"}
                    selectButtonText={"Select"}
                    buttonTextStyle={{
                        color: "grey"
                    }}
                    listEmptyTitle={"There is not any data"}
                />
            </View>
        </SafeAreaView>
    )
}

export default Index;
