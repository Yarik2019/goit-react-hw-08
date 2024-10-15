import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import s from "./Contact.module.css";

const Contact = (props) => {
  const { id, name, number } = props;
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <div className={s.item}>
        <h3 className={s.name}>{name}</h3>
        <p className={s.phone}>{number}</p>
      </div>
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
