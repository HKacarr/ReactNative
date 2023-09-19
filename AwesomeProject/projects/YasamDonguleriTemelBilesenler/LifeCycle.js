import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    console.log('Constructor Çalıştı');
  }

  componentDidMount() {
    console.log('Component Did Mount Çalıştı');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Prev State : ' + prevState);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // Buradad ilk başta girer kontrol yapar sonra componentDidMount çalışır ve tekrar buraya gelir. return false olunca render ve componentDidUpdate çalışmaz.
    console.log('Next State : ' + nextState);
    if (this.state.text !== nextState.text) {
      return true;
    } else {
      console.log('Aynı değere atama yapılamaz!');
      return false;
    }
  }

  render() {
    console.log('Render Çalıştı');
    return (
      <View style={[{marginTop: 100}]}>
        <TouchableOpacity onPress={() => this.setState({text: 'a'})}>
          <Text>Set State</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LifeCycle;
