import React, { Component } from "react";
import { Button, SafeAreaView } from "react-native";

class Index extends Component {

  render() {
    return (
      <SafeAreaView>
        <Button title={'Go Detail Page'} onPress={() => this.props.navigation.navigate('Details', {
          id: 2,
          name: "Hasan Kacar Home"
        })} />
      </SafeAreaView>
    );
  }
}

export default Index;
