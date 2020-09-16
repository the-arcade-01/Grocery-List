import React from 'react';
import PropTypes from 'prop-types';

class GroceryItem extends React.Component {
    getStyle = ()=>{
        return {
            textDecoration : this.props.item.completed ? 'line-through':'none'
        }
    }
    render(){
        const {id,title} = this.props.item;
        return (
            <div style = {this.getStyle()}>
                <p>
                <input type='checkbox' onChange={this.props.markItem.bind(this,id)}/>{' '}{title}{' '}
                <button onClick = {this.props.deleteItem.bind(this,id)}>X</button>
                </p>
            </div>
        )
    }
}

GroceryItem.propTypes = {
    item : PropTypes.object.isRequired,
    markItem : PropTypes.func.isRequired,
    deleteItem : PropTypes.func.isRequired
}
export default GroceryItem; 