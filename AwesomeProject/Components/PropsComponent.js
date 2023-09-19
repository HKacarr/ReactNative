import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class PropsComponent extends Component {
  constructor() {
    super();

    this.state = {
      address: 'İzmir',
    };
  }
  render() {
    const {name, year, changeState} = this.props;
    const {address} = this.state;

    return (
      <View>
        <Text>Props Component</Text>
        <Text>Props Name : {name}</Text>
        <Text>Props Year : {this.props.year}</Text>
        <Text>State Address : {address}</Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({address: 'Denizli'});
            changeState();
          }}>
          <Text style={[{fontWeight: 'bold'}]}>State Değiştir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PropsComponent;
