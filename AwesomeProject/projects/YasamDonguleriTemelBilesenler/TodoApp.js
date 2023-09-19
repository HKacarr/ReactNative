import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import TodoList from '../../Components/TodoApp/TodoList';

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todoText: '',
      allTodos: [],
    };
  }

  render() {
    const {text, allTodos} = this.state;
    const addNewTodo = () => {
      let {text, allTodos} = this.state;
      allTodos.push({text});
      this.setState({text: '', allTodos: allTodos});
    };

    return (
      <View style={[styles.mainView]}>
        <View style={[styles.titleView]}>
          <Text style={[styles.titleText]}>To-Do List Application</Text>
        </View>

        <View style={[styles.textInputView]}>
          <TextInput
            style={[styles.textInput]}
            value={text}
            onChangeText={text => {
              this.setState({text: text});
            }}
          />
          <TouchableOpacity onPress={addNewTodo} style={[styles.addButtonArea]}>
            <Text style={[styles.addButton]}>Add</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.todoListView]}>
          <Text style={[styles.todoListViewTitle]}>To-Do List</Text>
          <View style={styles.todoListContentView}>
            {allTodos.map(data => {
              return (
                <TodoList
                  listStyle={styles.todoListContentText}
                  todoText={data.text}
                  todoTextView={styles.todoListContentTextView}
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 75,
  },
  titleView: {
    backgroundColor: 'blue',
    padding: 10,
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 19,
  },
  textInputView: {
    backgroundColor: 'gray',
    padding: 15,
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: 'white',
    padding: 10,
    flex: 3,
    maxWidth: 330,
    borderRadius: 10,
  },
  addButtonArea: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'blue',
    marginLeft: 10,
  },
  addButton: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  todoListView: {
    marginTop: 20,
  },
  todoListViewTitle: {
    backgroundColor: 'blue',
    padding: 10,
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  todoListContentView: {
    padding: 10,
  },
  todoListContentText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: 'grey',
  },
  todoListContentTextView: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'grey',
    marginTop: 10,
  },
});

export default TodoApp;
