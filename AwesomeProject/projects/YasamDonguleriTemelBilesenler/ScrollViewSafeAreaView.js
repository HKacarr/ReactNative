import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';

class ScrollViewSafeAreaView extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={[styles.viewStyles, {backgroundColor: 'blue'}]}></View>
          <View style={[styles.viewStyles, {backgroundColor: 'yellow'}]}></View>
          <View style={[styles.viewStyles, {backgroundColor: 'green'}]}></View>
          <View style={[styles.viewStyles, {backgroundColor: 'orange'}]}></View>
          <View style={[styles.viewStyles, {backgroundColor: 'brown'}]}></View>
          <View style={[styles.viewStyles, {backgroundColor: 'black'}]}></View>
          <View style={[styles.viewStyles, {backgroundColor: 'red'}]}></View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

let styles = StyleSheet.create({
  viewStyles: {
    height: 150,
  },
});
export default ScrollViewSafeAreaView;
