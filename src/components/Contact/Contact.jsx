import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { Modal, Box } from "@mui/material";
import UpdateContactForm from "../UpdateContactForm/UpdateContactForm";
import { useToggle } from "../hooks/useToggle";
const Contact = (props) => {
  const { id, name, number } = props;
  const contact = props;
  const dispatch = useDispatch();
  const { isOpen, openModel, closeModel } = useToggle();

  return (
    <>
      <li className="max-w-2xl px-3 py-3 bg-white rounded-lg dark:bg-gray-800 shadow-md shadow-white transition-all ease-in duration-300  hover:scale-105 ">
        <div className="flex items-center justify-between ">
          <h3 className="font-bold">{name}</h3>
          <p className="font-bold">{number}</p>
          <button
            className="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-red-900 rounded-md hover:bg-red-800 dark:hover:bg-gray-red focus:outline-none focus:bg-red-800 dark:focus:bg-red-700"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
          <button
            className="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-green-900 rounded-md hover:bg-green-800 dark:hover:bg-gray-red focus:outline-none focus:bg-green-800 dark:focus:bg-green-700"
            onClick={openModel}
          >
            Update
          </button>
        </div>
      </li>
      <Modal
        open={isOpen}
        onClose={closeModel}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            width: 400,
            height: 300,
            borderRadius: 5,
            margin: "auto",
            marginTop: 30,
            padding: 2,
          }}
        >
          <UpdateContactForm contact={props} closeModal={closeModel} />
        </Box>
      </Modal>
    </>
  );
};

export default Contact;
