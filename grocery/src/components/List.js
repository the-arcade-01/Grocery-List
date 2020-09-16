import React from 'react';
import PropTypes from 'prop-types';
import GroceryItem from './Item.js';

class GroceryList extends React.Component {
    render(){
        return this.props.groceryList.map((item)=>(
            <GroceryItem key = {item.id} item = {item} markItem = {this.props.markItem} deleteItem = {this.props.deleteItem}/>
        ));
    }
}

GroceryList.propTypes = {
    groceryList : PropTypes.array.isRequired,
    markItem : PropTypes.func.isRequired,
    deleteItem : PropTypes.func.isRequired
}

export default GroceryList;