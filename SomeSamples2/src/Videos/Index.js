import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';

const Index = () => {
    return (
        <SafeAreaView>
            <VideoPlayer
                video={require('./content/ForBiggerBlazes.mp4')}
                // videoWidth={600}
                // videoHeight={480}
                onBuffer={(res) => console.log(res)}
                onError={(err) => console.log(err)}
                // onProgress={(e) => console.log(e)}
                onLoad={(e) => console.log("Load")}
                onLoadStart={(e) => console.log("Load Start 2")}
                onEnd={(e) => console.log("End")}
                // thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
            />
        </SafeAreaView>
    )
}


export default Index;
