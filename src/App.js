import './App.css';
import Contacts from './Contacts';
import { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this);
  }

  state = {
    contacts:[{
      id: 1,
      name: 'Can',
      phone: '555 35 35'
    },{
      id: 2,
      name: 'Duru',
      phone: '555 35 35'
    }]
  }

  addContact(contact) {
    console.log(contact);
    const {contacts} = this.state;
    contacts.push(contact);
    this.setState({
      contacts: contacts
    });
  }

  render() {
    return (
      <div className="App">
        <Contacts addContact= {this.addContact} contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
