import { ContactItem } from 'components/ContactItem/ContactItem';
import { ItemList, Item } from './ContactListStyle';
import { useSelector } from 'react-redux';
import { getContacts,selectFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const contactfilter = useSelector(selectFilter);
  return (
    <ItemList>
      {contacts.length > 0 &&
        contactfilter.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <ContactItem name={name} id={id} number={number} />
            </Item>
          );
        })}
    </ItemList>
  );
};

