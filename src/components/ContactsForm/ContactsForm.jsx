import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Label, SubmitBtn } from './ContactsForm.styled';
import PropTypes from 'prop-types';

class ContactsForm extends Component {
  static propTypes = {
    createContact: PropTypes.func.isRequired,
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
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.contactsInputId}>
          Name
          <Input
            id={this.contactsInputId}
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label htmlFor={this.numberInputId}>
          Number{' '}
          <Input
            id={this.numberInputId}
            type="tel"
            name="number"
            placeholder="Enter number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <SubmitBtn type="submit">Add</SubmitBtn>
      </Form>
    );
  }
}
export default ContactsForm;
