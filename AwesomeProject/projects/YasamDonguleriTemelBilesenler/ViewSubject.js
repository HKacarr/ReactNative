import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

class ViewSubject extends Component {
  handleLayout = e => {
    let {x, y, width, height} = e.nativeEvent.layout;
    console.log('X Coordinate : ' + x);
    console.log('Y Coordinate : ' + y);
    console.log('Width : ' + width);
    console.log('Height : ' + height);
  };

  render() {
    return (
      <View style={[styles.viewSubject]} onLayout={this.handleLayout}></View>
    );
  }
}

let styles = StyleSheet.create({
  viewSubject: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    marginTop: 100,
  },
});
export default ViewSubject;
