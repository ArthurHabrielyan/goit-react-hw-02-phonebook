import { Component } from 'react';
import { ContactsForm } from './ContactsForm';
import { Section } from './Section';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = contact => {
    if (this.state.contacts.find(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onChangeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactId),
    }));
  };

  render() {
    const toLowerCaseContacts = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerCaseContacts)
    );

    return (
      <div className="container">
        <Section
          title={
            'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d Artagnan'
          }
        >
          <ContactsForm onSubmit={this.formSubmitHandler} />
          <Filter
            onChangeFilter={this.onChangeFilter}
            filterValue={this.state.filter}
          />
          <ContactList
            contactsArr={visibleContacts}
            deleteContact={this.onDeleteContact}
          />
        </Section>
      </div>
    );
  }
}
