import {
  Item,
  Name,
  Number,
  DeleteBtn,
  Container,
} from './ContactsItem.styled';
import PropTypes from 'prop-types';

const ContactsItem = ({ contacts, deleteContact }) => {
  return contacts.map(({ name, number, id }) => {
    return (
      <Item key={id}>
        <Container>
          <Name>{name}: </Name>
          <Number> {number}</Number>
        </Container>

        <DeleteBtn
          onClick={() => {
            return deleteContact(id);
          }}
        >
          Delete
        </DeleteBtn>
      </Item>
    );
  });
};
ContactsItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactsItem;
