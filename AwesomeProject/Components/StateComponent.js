import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropsComponent from './PropsComponent';

class StateComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Hasan Kacar',
      year: 1999,
      school: 'Pamukkale University',
    };
  }

  changeState = () => {
    this.setState(
      {
        name: 'Ahmet Mehmet',
        year: '1998',
        school: 'Graduate',
      },
      () => {
        alert('Process succesfully completed');
      },
    );
  };

  render() {
    const {name, year, school} = this.state;
    return (
      <View>
        <Text>Name : {name}</Text>
        <Text>School : {school}</Text>
        <Text>Birth Year : {year}</Text>

        <TouchableOpacity onPress={() => this.changeState()}>
          <Text style={[{fontWeight: 'bold'}]}>Change State</Text>
        </TouchableOpacity>
        <PropsComponent
          changeState={this.changeState}
          name={'Hasan Kacar'}
          year={1999}
        />
      </View>
    );
  }
}

export default StateComponent;
