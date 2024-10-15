import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className={s.list}>
      <li className={s.list}>
        {contacts.map((contact) => (
          <Contact key={contact.id} {...contact} />
        ))}
      </li>
    </ul>
  );
};

export default ContactList;
