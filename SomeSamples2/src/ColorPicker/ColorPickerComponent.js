import React, {Component, useRef} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ColorPicker} from 'react-native-color-picker-light';

const ColorPickerComponent = () => {
    const picker = useRef();
    return (
        <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <ColorPicker
                ref={picker}
                type="color"
                style={{ width: 200, height: 200 }}
                onColorChange={color  => {
                    console.log('color:', color);
                }}
            />
        </SafeAreaView>
    )
}

export default ColorPickerComponent;
