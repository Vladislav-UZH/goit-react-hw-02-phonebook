import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactsItem from 'components/ContactsItem';
import Filter from 'components/Filter';
import Notification from 'components/Notification';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '098-396-56-58' },
      { id: 'id-2', name: 'Hermione Kline', number: '050-966-23-50' },
      { id: 'id-3', name: 'Eden Clements', number: '099-663-10-22' },
      { id: 'id-4', name: 'Annie Copeland', number: '099-423-66-19' },
    ],
    filter: '',
  };
  createContact = ({ name, number }) => {
    const id = nanoid();
    if (this.checkContactsForComplinance({ name, number })) {
      return this.notification(name);
    }

    this.setState(({ contacts }) => {
      return { name, contacts: [{ name, number, id }, ...contacts] };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contact.id !== id),
      };
    });
    console.log('delete');
  };
  checkContactsForComplinance = ({ name: newName }) => {
    return this.state.contacts.find(({ name }) => name === newName);
  };
  notification = name => {
    alert(`You have already had ${name} as contact!`);
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFiltredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const { filter } = this.state;
    return (
      <div
        style={{
          padding: 20,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#22232B',
          color: '#DBD7D7',
        }}
      >
        <div
          style={{
            borderRadius: 10,
            padding: 30,
            backgroundColor: '#32343B',
          }}
        >
          <h1>Phonebook</h1>
          <ContactsForm createContact={this.createContact} />

          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList>
            {!this.getFiltredContacts().length ? (
              <Notification message="No contacts with the entered name!" />
            ) : (
              <ContactsItem
                deleteContact={this.deleteContact}
                contacts={this.getFiltredContacts()}
              />
            )}
          </ContactsList>
        </div>
      </div>
    );
  }
}
