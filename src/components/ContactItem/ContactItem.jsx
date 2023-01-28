// import PropTypes from 'prop-types';
import { AiOutlineUser } from 'react-icons/ai';
import { ContactItemStyle, Btn, Text, Number } from './ContactItemStyle';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operation';

export const ContactItem = ({ id, name, number,  }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
  dispatch(deleteContact(id));
  }

  return (
    <ContactItemStyle>
      <Text>
        <AiOutlineUser fill="red" /> {name}: <Number>{number}</Number>
      </Text>
      <Btn
        type="button"
        onClick={handleDeleteContact}
      >
        Delete
      </Btn>
    </ContactItemStyle>
  );
};


