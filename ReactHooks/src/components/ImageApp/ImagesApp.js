import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import ImageView from 'react-native-image-viewing';

const ImagesApp = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const Images = {
        "images": [
            {"uri": "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1828000/fenerbahce-logo-aa-1828428.jpg"},
            {"uri": "https://cdnuploads.aa.com.tr/uploads/Contents/2023/08/24/thumbs_b_c_f4ca14a442ad1cc7456b86d383fb7bec.jpg?v=125601"},
            {"uri": "https://www.kucukmenderes.com.tr/wp-content/uploads/2023/07/fenerbahce-353456-1.webp"}
        ]
    }

    // setImages(Images);
    // console.log(images)

    return (
        <SafeAreaView style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            {Images.images.map((image, index) => {
                return (
                    <TouchableOpacity onPress={() => {
                        setIsVisible(true);
                        setImageIndex(index)
                    }}>
                        <Image style={{width: 250, height: 250, marginTop: 20}} source={{ uri: image.uri}} />
                    </TouchableOpacity>
                )
            })}


            <ImageView
                images={Images.images}
                imageIndex={imageIndex}
                visible={isVisible}
                onRequestClose={() => setIsVisible(false)}
            />
        </SafeAreaView>
    )
}

export default ImagesApp;
