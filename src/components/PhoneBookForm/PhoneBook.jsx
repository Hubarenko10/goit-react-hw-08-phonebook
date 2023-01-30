import { useState } from 'react';
import { Form } from './PhoneBookStyle';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operation';
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Box,
  InputLeftElement,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { AiOutlineUser } from 'react-icons/ai';

export const PhoneBook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      return alert(name + '  - duplicate contact');
    } else {
      dispatch(addContact({ name, number }));
    }
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel mt={5}>Name</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<AiOutlineUser color="gray.400" />}
            />
            <Input
              value={name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Contact`s name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel mt={5}>Phone number</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.400" />}
            />
            <Input
              value={number}
              onChange={handleChange}
              type="tel"
              name="number"
              placeholder="Phone number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </InputGroup>
        </FormControl>
        <Box
          mt={5}
          as="button"
          type="submit"
          height="34px"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="1px"
          px="25px"
          borderRadius="2px"
          fontSize="14px"
          fontWeight="semibold"
          bg="blue.200"
          borderColor="#ccd0d5"
          color="white"
          _hover={{ bg: '#ebedf0', color: 'teal' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
          }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
        >
          Add contact
        </Box>
      </Form>
    </>
  );
};
