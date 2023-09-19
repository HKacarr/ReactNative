import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

class PropTypeComponent extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Text>{this.props.age}</Text>
        <Text>{this.props.school}</Text>
      </View>
    );
  }
}

PropTypeComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  school: PropTypes.string.isRequired,
};

PropTypeComponent.defaultProps = {
  school: 'Graduated',
};

export default PropTypeComponent;
