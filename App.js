import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './components/TodoList';
import Form from './components/Form';
import { ToDoServices } from './Services/ToDoServices';
import React from 'react';

export default class App extends React.Component {
  state = {
    list: []
  }

  async componentDidMount() {
    const list = await ToDoServices.list();
    this.setState(list);
  } 

  add = async (text) => {
    const newItem = await ToDoServices.create({ text });
    const list = [...this.state.list, newItem];
    this.setState({ list });
  }

  remove = async (item) => {
    await ToDoServices.remove(item.id);
    const list = this.state.list.filter(itemList => itemList.id !== item.id);
    this.setState(list);
  }

  render() {
    const { state } = this;
    return (
      <View style={styles.container}>
        <Form onAdd={this.add} />
        <TodoList list={state.list} onRemove={this.remove} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50
  },
});
