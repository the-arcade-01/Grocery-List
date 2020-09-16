import React from 'react';
import PropTypes from 'prop-types';

class GroceryList extends React.Component {
    render(){
        return this.props.groceryList.map((item)=>(
            <h1>{item.title}</h1>
        ));
    }
}

GroceryList.propTypes = {
    groceryList : PropTypes.array.isRequired
}

export default GroceryList;