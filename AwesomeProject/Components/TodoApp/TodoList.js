import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

class TodoList extends Component {
  render() {
    return (
      <View style={[this.props.todoTextView]}>
        <Text style={[this.props.listStyle]}>{this.props.todoText}</Text>
      </View>
    );
  }
}

TodoList.propTypes = {
  todoText: PropTypes.string.isRequired,
};

TodoList.defaultProps = {
  todoText: 'There is not any activity on your list',
};

export default TodoList;
