import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {Context} from '../ContextApi/ContextApi';

const FooterComponent = () => {
    return (
        <Context.Consumer>
            {(context) => {
                return (
                    <SafeAreaView>
                        <TouchableOpacity onPress={() => context.theme === "light" ? context.setTheme("black") : context.setTheme("light")}>
                            <Text>Change Theme</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                )
            }}
        </Context.Consumer>
    )
}

export default FooterComponent;
