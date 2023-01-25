import { PhoneBook } from './PhoneBookForm/PhoneBook';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from 'redux/operation';
import { getError,getIsLoading } from 'redux/selectors';
import { Loader } from './Loader';


export const App = () => {
const dispatch = useDispatch();
const isLoading = useSelector(getIsLoading);
const error = useSelector(getError);

useEffect(() => {
  dispatch(fetchContacts())
}, [dispatch])

   return (
    <>
      <Section title="Phonebook">
        <PhoneBook />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <Loader />}
        {error && <p>{error}</p>}
        {!isLoading && <ContactList/>}
      </Section>
    </>
  );
};
