import React, { Component } from 'react'
import './List.css';
import PropTypes from 'prop-types';

class List extends Component {
    static propTypes = {
        contacts : PropTypes.array.isRequired,
        contact: PropTypes.string.isRequired
    };
    state ={
        filterText:''
    }
    onChangeFilterText = (e) =>{
        //console.log(e.target.value);
        this.setState({
            filterText: e.target.value
        });
    }
    render() {
        const filteredContacts = this.props.contacts.filter(
            
            contact => {
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                )!== -1
            }

        );
        
        return (
            <div className='listArea'>
                <input name='filter' id='filter' value={this.state.filterText} onChange={this.onChangeFilterText} placeholder='filter by name or  phone'></input>
                <ul>
                    {filteredContacts.map(contact =>
                        <li key = {contact.id}>
                            <span className={"name"}> {contact.name} </span>
                            <span className={'phone'}> {contact.phone} </span>
                            <span className='clearFix'></span>
                        </li>
                    )}

                </ul>
            </div>
        )
    }
}

export default List;