import React from 'react';
import './App.css';

import GroceryList from './components/List';
import AddItem from './components/AddItem';

class App extends React.Component{
  state = {
    grocery : [
      {
        id : 1,
        title : 'Milk',
        completed : false
      },
      {
        id : 2,
        title : 'Bread',
        completed : false
      },
      {
        id : 3,
        title : 'Meat',
        completed : false
      },
      {
        id : 4,
        title : 'Wheat',
        completed : false
      },
      {
        id : 5,
        title : 'Pound',
        completed : false
      }
    ]
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
    })})
  }
  addItem = (item) =>{
    const newItem = {
      id : 6,
      title : item,
      completed : false
    }
    this.setState({grocery:[...this.state.grocery,newItem]});
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
