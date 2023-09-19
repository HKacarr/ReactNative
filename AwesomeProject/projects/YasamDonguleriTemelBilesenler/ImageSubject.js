import React, {Component} from 'react';
import {View, Image} from 'react-native';

class ImageSubject extends Component {
  render() {
    return (
      <View>
        <Image
          style={{
            width: 200,
            height: 200,
            backgroundColor: 'blue',
            marginTop: 100,
            borderRadius: 100,
          }}
          source={{
            uri: 'https://cdn.ntvspor.net/3eb953b991b642dea6dfd9be80f637a3.jfif?crop=420,0,1500,1080&w=800&h=800&mode=crop',
          }}
        />
      </View>
    );
  }
}

export default ImageSubject;
