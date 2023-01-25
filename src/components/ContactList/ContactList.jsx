import { ContactItem } from 'components/ContactItem/ContactItem';
import { ItemList, Item } from './ContactListStyle';
import { getContacts, selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

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

