import React, {Component, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Context} from '../ContextApi/ContextApi';

const HeaderComponent = () => {
    return (
        <Context.Consumer>
            {(context)=>{
               return (
                   <SafeAreaView>
                       <Text>Theme : {context.theme}</Text>
                   </SafeAreaView>
               )
            }}
        </Context.Consumer>
    )
}

export default HeaderComponent;
