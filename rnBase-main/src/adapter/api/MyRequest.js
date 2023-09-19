import {ErrorDialog} from "../../helper/components/Dialogs";
import RequestAPI from "./RequestApi";
import DeviceInformation from "../../device/DeviceInformation";
import {isConnected} from "../../helper/functions/ServiceControl";

/**
 * @param requestName                       -> used api name
 * @param url                               -> used api url
 * @param data                              -> api request data
 * @param showLoading                       -> to show loading indicator
 * @param loadingText                       -> to set text to the loading indicator
 * @returns {Promise<any> | Promise<*>}
 */

export function myRequest(requestName, url, data = {}, showLoading = true, loadingText = "", type = "POST") {

    let userData = new DeviceInformation().getAccessData();

    let accessData = {...userData, ...data};

    console.log(requestName + ": data: ", accessData);

    if (showLoading) {
        // to show loading indicator
        __loadingContext.showLoading(loadingText);
    }

    return new Promise(function (resolve, reject) {
        isConnected()
            .then(() => {

                let R = new RequestAPI();

                R.ajax({
                    type: type,
                    url: url,
                    data: JSON.stringify(accessData),
                    success: function (responseJson) {
                        responseJson = JSON.parse(responseJson);

                        console.log(requestName, " response json: ", responseJson);

                        resolve(responseJson);

                    },
                    error: function (errorCode, error, xhr) {
                        console.log(requestName, ' xhr: ', xhr);
                        try {
                            let response = JSON.parse(xhr._response);
                            console.log(requestName, ' xhr error: ', response);
                            ErrorDialog(__stringContext.myStrings.alertDialogs.error, response["message"], __stringContext.myStrings.button.ok, "", false);
                            reject("error");
                        }
                        catch (error) {
                            if (showLoading) {
                                // to hide loading indicator
                                __loadingContext.hideLoading();
                            }
                            reject(error)
                        }
                    },
                    complete: function (xhr) {
                        let response = JSON.parse(xhr._response);
                        console.log(requestName, ' xhr completed: ', response);

                        if (showLoading) {
                            // to hide loading indicator
                            __loadingContext.hideLoading();
                        }
                    }
                })

            })
            .catch(() => {
                if (showLoading) {
                    // to hide loading indicator
                    __loadingContext.hideLoading();
                }
                reject({message: __stringContext.alertDialogs.connectionError});
            })
    })

}
