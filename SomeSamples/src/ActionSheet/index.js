import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {ActionSheetCustom as ActionSheet} from 'react-native-actionsheet';


const ActionSheetComponent = () => {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => this.ActionSheet.show()}>
                <Text>Open to Actionsheet</Text>
            </TouchableOpacity>

            <ActionSheet
                ref={ref => this.ActionSheet = ref}
                title={<Text style={{color: '#000', fontSize: 18, fontWeight: "700"}}>Which one do you like?</Text>}
                options={[
                    <Text style={{color: 'green', fontSize: 18, fontWeight: "600"}}>Add Product</Text>,
                    <Text style={{color: 'blue', fontSize: 18, fontWeight: "600"}}>Edit Product</Text>,
                    <Text style={{color: 'red', fontSize: 18, fontWeight: "600"}}>Delete</Text>,
                    "Cancel"
                ]}
                cancelButtonIndex={3}
                destructiveButtonIndex={2}
                onPress={(index) => {
                    switch (index) {
                        case 0:
                            alert("Add Process Selected from ActionSheet");
                            break;

                        case 1:
                            alert("Edit Process Selected from ActionSheet");
                            break;

                        case 2:
                            alert("Remove Process Selected from ActionSheet");
                            break;

                        case 3:
                            alert("Cancel Process Selected from ActionSheet");
                            break;

                        default:
                            alert("Error!");
                    }
                }}
            />
        </SafeAreaView>
    )
}

export default ActionSheetComponent;
