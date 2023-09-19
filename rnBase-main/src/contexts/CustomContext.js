import React, { cloneElement } from 'react';
import {LoginContextProvider} from './LoginContext';
import {LoadingContextProvider} from './LoadingContext';
import {ToastContextProvider} from "./ToastContext";
import {ThemeContextProvider} from "./ThemeContext";
import {StringContextProvider} from "./StringContext";
import DialogContextProvider from './DialogContext';

// to merge all providers
function ProviderComposer({ contexts, children }) {
    return contexts.reduce(
        (kids, parent) =>
            cloneElement(parent, {
                children: kids,
            }),
        children
    );
}

export default function CustomContextProvider({children}) {

    return (
        <ProviderComposer
            // add providers to array of contexts
            contexts={[
                <LoginContextProvider/>,
                <LoadingContextProvider/>,
                <DialogContextProvider/>,
                <ToastContextProvider/>,
                <ThemeContextProvider/>,
                <StringContextProvider/>
            ]}>

            {children}

        </ProviderComposer>
    );

}
