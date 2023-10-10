import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const CountdownTimer = () => {
    return (
        <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <CountdownCircleTimer
                isPlaying
                duration={10}
                colors={['#8ADCEB', '#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[10, 7, 5, 2, 0]}
                onComplete={() => alert("Timer Completed")}
            >
                {({ remainingTime }) => <Text>{remainingTime}</Text>}
            </CountdownCircleTimer>
        </SafeAreaView>
    )
}

export default CountdownTimer;
