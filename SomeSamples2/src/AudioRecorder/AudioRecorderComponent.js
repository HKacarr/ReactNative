import React, {Component, useState} from 'react';
import {Platform, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AudioRecorderPlayer from 'react-native-audio-recorder-player/index';

const AudioRecorderComponent = () => {
    const [timer, setTimer] = useState("00:00:00");
    const [isStarted, setIsStarted] = useState(false);

    /** New Audio Recorder - Start */
    const audioRecorderPlayer = new AudioRecorderPlayer();

    const _onStartRecord = async () => {
        console.log(2);
        const result = await audioRecorderPlayer.startRecorder();
        audioRecorderPlayer.addRecordBackListener((e) => {
            setTimer(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
            setIsStarted(true);
            return;
        })

        console.log(result);
    }

    const _onStopRecord = async () => {
        console.log(1);
        const result = await audioRecorderPlayer.pauseRecorder();
        const result2 = await audioRecorderPlayer.stopRecorder();
        // const result = await audioRecorderPlayer.stopRecorder();
        // audioRecorderPlayer.removeRecordBackListener();
        // setIsStarted(false);
        // setTimer("00:00:00");
        // console.log(result);
    };
    /** New Audio Recorder - End */

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <View>
                    <Icon name={"microphone"} size={60} />
                </View>
                <View style={{flexDirection: 'row', gap: 20, marginTop: 20}}>
                    <TouchableOpacity onPress={_onStartRecord}>
                        <Icon name={"play"} size={40} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={_onStopRecord}>
                        <Icon name={"pause"} size={40} />
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center', marginTop: 20}}>
                    <Text>{timer}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AudioRecorderComponent;
