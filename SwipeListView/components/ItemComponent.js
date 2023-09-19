import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';


function ItemComponent({item})
{
    return (
        <SwipeListView
            data={[item]}
            renderItem={(data) => (
                <View style={{
                    backgroundColor: "#FFF",
                    marginTop: 20,
                    padding: 15,
                    borderRadius: 8,
                }}>
                    <Text>{item}</Text>
                </View>
            )}
            renderHiddenItem={(data) => (
                <View style={{
                    alignItems: "center",
                    justifyContent: 'space-between',
                    flexDirection: "row",
                    flex: 1
                }}>
                    <TouchableOpacity style={{
                        position: 'absolute',
                        top: 20,
                        padding: 15,
                        left: 0,
                        justifyContent: 'center',
                        alignItems: "center",
                        backgroundColor: 'green',
                        borderRadius: 8
                    }}>
                        <Text style={{color: 'white'}}>Upload</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        position: 'absolute',
                        top: 20,
                        padding: 15,
                        right: 0,
                        justifyContent: 'center',
                        alignItems: "center",
                        backgroundColor: 'red',
                        borderRadius: 8
                    }}>
                        <Text style={{color: 'white'}}>Sil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        position: 'absolute',
                        top: 20,
                        padding: 15,
                        right: 50,
                        justifyContent: 'center',
                        alignItems: "center",
                        backgroundColor: 'blue',
                        borderRadius: 8,
                    }}>
                        <Text style={{color: 'white'}}>Düzenle</Text>
                    </TouchableOpacity>
                </View>
            )}
            rightOpenValue={-150}
            leftOpenValue={90}
        />
    )
}

export default ItemComponent;
