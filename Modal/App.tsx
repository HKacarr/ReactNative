/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text, TouchableOpacity, View,
} from 'react-native';

import Modal from "react-native-modal";


import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator
}
from 'react-native-indicators'


function App(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const [indicatorStatus, setIndicatorStatus] = useState(true);

    const _onModalShow = () => {
        console.log("Modal Opened");
    }

    useEffect(() => {
        setTimeout(() => {
            setIndicatorStatus(false);
        }, 5000);
    });

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        {
            indicatorStatus
            ?
            <WaveIndicator color={"red"} />
            :
            <View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text>Open Modal</Text>
                </TouchableOpacity>
                <Modal
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    isVisible={modalVisible}
                    animationOutTiming={300}
                    hasBackdrop={true}
                    backdropColor={"red"}
                    backdropOpacity={0.3}
                    backdropTransitionInTiming={500}
                    backdropTransitionOutTiming={500}
                    onModalShow={() => _onModalShow()}
                    customBackdrop={<View style={{flex: 1, backgroundColor: 'blue'}}></View>}
                >
                    <View>
                        <View style={{padding: 15, backgroundColor: '#FFF', borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
                            <Text>This is a modal description. If you want to close to this modal, you can click to button of the bottom.</Text>
                        </View>
                        <View style={{
                            backgroundColor: '#D9D9D9',
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 12
                        }}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        }
    </SafeAreaView>
  );
}

export default App;
