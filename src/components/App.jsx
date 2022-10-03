import { ContactsForm } from "components/ContactsForm/ContactsForm";
import { Filter } from "components/Filter/Filter";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Section, Container, H1, H2, InfoMessage } from "components/App.styled";
import { useSelector } from "react-redux";
import { BiInfoCircle } from "react-icons/bi";
import { GlobalStyles } from "./GlobalStyles";


export function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);
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
