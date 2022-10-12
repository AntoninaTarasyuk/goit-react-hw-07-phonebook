import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectContacts, selectIsLoading, selectError } from "redux/selectors";
import { ContactsForm } from "components/ContactsForm/ContactsForm";
import { Filter } from "components/Filter/Filter";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Section, Container, H1, H2, InfoMessage } from "components/App.styled";
import { BiInfoCircle } from "react-icons/bi";
import { GlobalStyles } from "./GlobalStyles";


export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Section>
        <Container>
          <H1>Phonebook</H1>
          <ContactsForm />
        </Container>
      </Section>
      <Section>
        <Container>
          {isLoading && !error && <b>Waiting for response...</b>}
          <H2>Contacts</H2>
          <Filter />
          {contacts.length > 0
            ? <ContactsList/>
            : (<InfoMessage><BiInfoCircle />There are no contacts yet</InfoMessage>)
          }
        </Container>  
      </Section>
      <GlobalStyles />
    </main>
  );
};
