import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import GestureFlipView from 'react-native-gesture-flip-card';

const renderFront = () => {
    return (
        <View style={{backgroundColor: "yellow", width: 300, height: 500, justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text style={{fontSize: 25, color: 'blue'}}>{'Front'}</Text>
        </View>
    );
};

const renderBack = () => {
    return (
        <View style={{backgroundColor: "blue", width: 300, height: 500, justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text style={{fontSize: 25, color: 'yellow'}}>{'Back'}</Text>
        </View>
    );
};

const FlipCard = () => {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.flipView.flipLeft()} style={{marginBottom: 50, borderStyle: 'solid', borderWidth: 1, padding: 10, borderRadius: 10}}>
                <Text>Flip Card</Text>
            </TouchableOpacity>
            <GestureFlipView
                width={300}
                height={500}
                ref={(ref) => this.flipView = ref}
            >
                {renderBack()}
                {renderFront()}
            </GestureFlipView>
        </SafeAreaView>
    )
}

export default FlipCard;
