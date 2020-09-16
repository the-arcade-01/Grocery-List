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
  render() {
    return (
      <GroceryList groceryList = {this.state.grocery}/>
    )
  }
}

export default App;
