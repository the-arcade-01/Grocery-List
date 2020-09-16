import React from 'react';
import PropTypes from 'prop-types';

class AddItem extends React.Component {
    state = {
        item : ''
    }
    onChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({item:''});
    }
    render(){
        return(
            <form onSubmit = {this.onSubmit}>
                <input type='text' name ='item' value = {this.state.item} onChange = {this.onChange}/>
                <input type='submit' value='Submit'/>
            </form>
        )
    }
}

AddItem.propTypes = {
    addItem : PropTypes.func.isRequired
}

export default AddItem;