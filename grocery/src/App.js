import React from 'react';
import './App.css';

import GroceryList from './components/List';

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
  render() {
    return (
      <GroceryList groceryList = {this.state.grocery} markItem = {this.markItem} deleteItem = {this.deleteItem}/>
    )
  }
}

export default App;
