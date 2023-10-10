import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import YouTube from 'react-native-youtube';

const YoutubeVideo = () => {
    return (
        <SafeAreaView>
            <YouTube
                videoId="SYG9ryjtxZQ" // The YouTube video ID
                play // control playback of video with true/false
                fullscreen // control whether the video should play in fullscreen or inline
                loop // control whether the video should loop when ended
                onReady={e => console.log(e)}
                onChangeState={cl => console.log(cl)}
                onChangeQuality={cq => console.log(cq)}
                onError={err => console.log(err)}
                style={{ alignSelf: 'stretch', height: 300 }}
            />
        </SafeAreaView>
    )
}

export default YoutubeVideo;
