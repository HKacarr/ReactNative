import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

class ScrollViewComponent extends Component {
  render() {
    return (
      <ScrollView style={[{flex: 1, width: '100%'}]}>
        <View style={[styles.standartView, { backgroundColor: "yellow" }]} />
        <View style={[styles.standartView, { backgroundColor: "blue" }]} />
        <View style={[styles.standartView, { backgroundColor: "brown" }]} />
        <View style={[styles.standartView, { backgroundColor: "pink" }]} />
        <View style={[styles.standartView, { backgroundColor: "orange" }]} />
        <View style={[styles.standartView, { backgroundColor: "green" }]} />
        <View style={[styles.standartView, { backgroundColor: "red" }]} />
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  standartView: {
    height: 200,
  },
});

export default ScrollViewComponent;
