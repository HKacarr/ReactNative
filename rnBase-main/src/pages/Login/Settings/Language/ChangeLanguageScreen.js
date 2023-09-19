import React, {useContext} from "react";
import {View} from "react-native";
import SyncStorage from "sync-storage";
import {WarningDialog} from '../../../../helper/components/Dialogs';
import {MyContainer} from "../../../../components/Container/Container";
import {MyListItemIcon} from "../../../../components/ListItem/MyListItemIcon";
import {StringContext} from "../../../../contexts/StringContext";
import {stringAlias} from "../../../../values/Strings/Strings";

export const ChangeLanguageScreen = (props) => {
    const {myStrings, updateString} = useContext(StringContext);

    function _handleLanguageSelection(languageCode) {
        WarningDialog(myStrings.language, myStrings.alertDialogs.languageMessage, myStrings.button.yes, myStrings.button.no, true)
            .then(() => {
                // to save selected language
                SyncStorage.set('language', languageCode);

                updateString(languageCode);
            })
    }

    return(

        <MyContainer
            title={myStrings.language}>

            <View>

                {/* language list item */}
                <MyListItemIcon
                    iconName={"globe"}
                    title={"Türkçe"}
                    onPress={() => {_handleLanguageSelection(stringAlias.TR)}}/>

                {/* language list item */}
                <MyListItemIcon
                    iconName={"globe"}
                    title={"English"}
                    onPress={() => {_handleLanguageSelection(stringAlias.EN)}}/>

            </View>

        </MyContainer>

    )

}
