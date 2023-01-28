import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { PhoneBook } from "components/PhoneBookForm/PhoneBook";
import { Loader } from "components/Loader";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operation";
import { getError,getIsLoading } from "redux/contacts/selectors";
import { Section } from "components/Section/Section";

export const Contacts = () => {
const isLoading = useSelector(getIsLoading);
const dispatch = useDispatch();
const error = useSelector(getError);

useEffect(() => {
dispatch(fetchContacts())
},[dispatch])
return(
    <>
    <Section title="Phonebook">
        <PhoneBook />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <Loader />}
        {error && <p>{error}</p>}
        {!isLoading && <ContactList />}
      </Section>
    </>
    )


}
