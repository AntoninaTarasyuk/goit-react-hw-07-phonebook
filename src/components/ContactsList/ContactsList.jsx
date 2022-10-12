import { useSelector } from "react-redux";
import { Box } from "../box";
import { selectContacts, selectFilter } from "redux/selectors";
import { ContactsItem } from "../ContactsItem/ContactsItem";

export const ContactsList = () => {
  const filterValue = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const normalizeFilter = filterValue && filterValue.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <Box as="ul" display="flex" flexDirection="column" gridGap={4}>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactsItem contact={contact}/>
          </li>
        );
      })}
    </Box>
  );
};