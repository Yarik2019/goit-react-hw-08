import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className="max-w-4xl p-6 mt-6 mb-6 mx-auto bg-white rounded-md  dark:bg-gray-800 shadow-md shadow-white transition-all ease-in duration-300  hover:scale-105 ">
      {contacts.length ? (
        <ul className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          {contacts.map((contact) => (
            <Contact key={contact.id} {...contact} />
          ))}
        </ul>
      ) : (
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          the contact list is empty
        </h2>
      )}
    </div>
  );
};

export default ContactList;
