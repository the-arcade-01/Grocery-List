import React from 'react';
import './App.css';

import GroceryList from './components/List';
import AddItem from './components/AddItem';
import {v4 as uuidv4} from 'uuid';

class App extends React.Component{
  state = {
    grocery : []
  }
  markItem = (id) => {
    this.setState({grocery:this.state.grocery.map(item=>{
      if(item.id === id){
        item.completed = !item.completed;
      }
      return item;
    })});
  }
  deleteItem = (id) => {
    this.setState({grocery:this.state.grocery.filter(item=>{
      return item.id !== id;
    })});
    localStorage.setItem('grocery',null);
    localStorage.setItem('grocery',JSON.stringify(this.state.grocery));
  }
  addItem = (item) =>{
    const newItem = {
      id : uuidv4(),
      title : item,
      completed : false
    }
    if(localStorage.getItem('grocery') === null){
      const items = [];
      items.push(newItem);
      localStorage.setItem('grocery',JSON.stringify(items));
    } else {
      const items = JSON.parse(localStorage.getItem('grocery'));
      items.push(newItem);
      localStorage.setItem('grocery',JSON.stringify(items));
    }
    this.setState({grocery:JSON.parse(localStorage.getItem('grocery'))});
  }
  // runs after render, here used for displaying the grocery items after rendering or refreshing
  componentDidMount() {
    const items = JSON.parse(localStorage.getItem('grocery'));
    if(items === null){
      return false;
    } else {
      this.setState({grocery:items});
    }
  }
  render() {
    return (
      <React.Fragment>
      <AddItem addItem = {this.addItem}/>
      <GroceryList groceryList = {this.state.grocery} markItem = {this.markItem} deleteItem = {this.deleteItem}/>
      </React.Fragment>
    )
  }
}

export default App;
