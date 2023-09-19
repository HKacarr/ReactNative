import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

let _openActionSheet = () => {
    this.ActionSheet.show();
}


const ActionSheet = () => {
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={_openActionSheet}>
                <Text>Open to Actionsheet</Text>
            </TouchableOpacity>

            <ActionSheet
                ref={ref => this.ActionSheet = ref}
                title={"Whic you want to select from bottom selection!"}
                options={["New Product", "Edit Product", "Delete", "Cancel"]}
                onPress={(index) => {

                }}
            />
        </SafeAreaView>
    )
}

export default ActionSheet;
