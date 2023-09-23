import React, {Component, useEffect, useState} from 'react';
import { Button, SafeAreaView, Text} from 'react-native';
import { ImageGallery } from '@georstat/react-native-image-gallery';

const Index = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openGallery = () => setIsOpen(true);
    const closeGallery = () => setIsOpen(false);

    const AllImages = [
        {
            image: 'https://picsum.photos/id/237/200/300',
            id: 1
        },
        {
            image: 'https://picsum.photos/seed/picsum/200/300',
            id: 2
        },
        {
            image: 'https://picsum.photos/200/300?grayscale\n',
            id: 3
        },
        {
            image: 'https://picsum.photos/200/300/?blur\n',
            id: 4
        },
        {
            image: 'https://picsum.photos/id/870/200/300?grayscale&blur=2\n',
            id: 5
        },
        {
            image: 'https://picsum.photos/id/871/200/300?grayscale&blur=2\n',
            id: 6
        },
        {
            image: 'https://picsum.photos/id/871/200/300\n',
            id: 7
        },
        {
            image: 'https://picsum.photos/seed/picsum/200/300',
            id: 8
        }
    ];

    const images = [];

    useEffect(() => {
        AllImages.map((img) => {
            images.push({
                url: img.image,
                id: img.id
            })
        });
    });

    return (
        <SafeAreaView style={{flex:1}}>
            <Button onPress={openGallery} title="Open Gallery" />
            <ImageGallery close={closeGallery} isOpen={isOpen} images={images} />
        </SafeAreaView>
    )
}

export default Index;
