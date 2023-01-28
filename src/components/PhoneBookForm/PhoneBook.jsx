import { useState } from 'react';
import { Form, Btn, Input, Label, Title } from './PhoneBookStyle';
import { useSelector,useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operation';

export const PhoneBook = () => {
  const [name,setName] = useState('')
  const [number,setNumber] = useState('')

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
    if(contacts.find(contact => contact.name === name)){
    return alert(name + '  - duplicate contact')
    }
    else {
    dispatch(addContact({name,number,}))
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
        <Label>
          <Title>Name</Title>
          <Input
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Title>Number</Title>
          <Input
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Btn type="submit">Add contacts</Btn>
      </Form>
    </>
  );
};
