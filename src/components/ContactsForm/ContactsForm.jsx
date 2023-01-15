import { Component } from 'react';
import { nanoid } from 'nanoid';
class ContactsForm extends Component {
  state = {
    name: '',
  };
  contactsInputId = nanoid();
  numberInputId = nanoid();
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const inputContactName = form.elements.name;
    const inputContactNumber = form.elements.number;
    const name = inputContactName.value.trim();
    const number = inputContactNumber.value.trim();
    const { createContact } = this.props;
    createContact({ name, number });

    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.contactsInputId}></label>
        <input
          id={this.contactsInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={this.numberInputId}></label>
        <input
          id={this.numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
export default ContactsForm;
