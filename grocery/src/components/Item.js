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
                <input type='checkbox' onChange={this.props.markComplete.bind(this,id)}/>{' '}{title}
                </p>
            </div>
        )
    }
}

GroceryItem.propTypes = {
    item : PropTypes.object.isRequired,
    markComplete : PropTypes.func.isRequired
}
export default GroceryItem; 