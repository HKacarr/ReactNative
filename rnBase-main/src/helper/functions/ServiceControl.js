import {ErrorDialog} from "../components/Dialogs";
import NetInfo from "@react-native-community/netinfo";

export function isConnected() {
    return new Promise(function (resolve, reject) {
        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);

            if (state.isConnected) {
                resolve();
            }
            else {
                reject();

                ErrorDialog(__stringContext.myStrings.alertDialogs.error, __stringContext.myStrings.alertDialogs.connectionError, __stringContext.myStrings.button.ok, "", false);
            }
        });
    })
}
