import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const Index = () => {
    const images = [
        "https://picsum.photos/id/237/1024/728",
        "https://picsum.photos/id/238/1024/728",
        "https://picsum.photos/id/239/1024/728",
        "https://picsum.photos/id/240/1024/728"
    ]

    return (
        <SafeAreaView>
            <Text>Slider Subject</Text>
            <SliderBox images={images} />
        </SafeAreaView>
    )
}

export default Index;
