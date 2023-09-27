import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Surface, Shape, Path, ClippingRectangle} from '@react-native-community/art';
import * as Progress from 'react-native-progress';

const Index = () => {
    return (
        <SafeAreaView>
            <Progress.Bar
                progress={0.3}
                width={150}
                height={10}
                animated={true}
                indeterminate={true}
                indeterminateAnimationDuration={2000}
                color={"green"}
                unfilledColor={"blue"}
                borderWidth={2}
                borderColor={"yellow"}
                borderRadius={10}
                useNativeDriver={false}
                animationConfig={{bounciness: 0}}
                animationType={"timing"}
            />

            {/*<Progress.Pie progress={0.4} size={50} />*/}

            {/*<Progress.Circle size={30} indeterminate={true} />*/}

            {/*<Progress.CircleSnail color={['red', 'green', 'blue']} />*/}
        </SafeAreaView>
    )
}

export default Index;
