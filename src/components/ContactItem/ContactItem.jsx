// import PropTypes from 'prop-types';
import { ContactItemStyle, Text, Number } from './ContactItemStyle';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';
import { CloseButton } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'


export const ContactItem = ({ id, name, number,  }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
  dispatch(deleteContact(id));
  }

  return (
    <ContactItemStyle>
      <Text>
      <PhoneIcon mr={2}/>{name}: <Number>{number}</Number>
      </Text>
      <CloseButton 
      type="button"
      onClick={handleDeleteContact}></CloseButton>
    </ContactItemStyle>
  );
};


