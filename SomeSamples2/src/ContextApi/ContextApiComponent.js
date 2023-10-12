import React, {createContext, useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import HeaderComponent from '../Components/HeaderComponent';
import FooterComponent from '../Components/FooterComponent';
import {Context} from './ContextApi';


const ContextApiComponent = (props) => {
    const [theme, setTheme] = useState("light");

    let data = {
        "theme": theme,
        "setTheme": setTheme
    }

    return (
        <Context.Provider value={data}>
            <SafeAreaView style={{flex: 1, backgroundColor: theme === 'light' ? '#E9E9E9' : '#212121'}}>
                <HeaderComponent />
                <FooterComponent />
            </SafeAreaView>
        </Context.Provider>
    )
}

export default ContextApiComponent;
