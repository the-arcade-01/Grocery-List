import React from 'react';
import PropTypes from 'prop-types';
import GroceryItem from './Item.js';

class GroceryList extends React.Component {
    render(){
        return this.props.groceryList.map((item)=>(
            <GroceryItem item = {item} markComplete = {this.props.markComplete}/>
        ));
    }
}

GroceryList.propTypes = {
    groceryList : PropTypes.array.isRequired,
    markComplete : PropTypes.func.isRequired
}

export default GroceryList;