import React, { Component } from "react";
import { Button, SafeAreaView } from "react-native";

class Index extends Component {
  render() {
    return (
      <SafeAreaView>
        <Button title={'Go Home Page'} onPress={() => this.props.navigation.navigate('Home')} />
      </SafeAreaView>
    );
  }
}

export default Index;
