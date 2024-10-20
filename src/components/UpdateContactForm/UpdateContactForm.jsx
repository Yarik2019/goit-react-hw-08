import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";

const UpdateContactForm = ({ contact, closeModal }) => {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();
  nanoid();
  // const onlyWords = /^[a-zA-Z]+$/;
  const handleUpdate = (values) => {
    dispatch(updateContact({ id: contact.id, ...values }));
    closeModal();
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Мінімум 3 символа (вибач Ян)")
      .max(50, "Максимум 22 символа")
      .required("Це поле обов'язкове!"),
    number: Yup.string()
      .min(3, "Мінімум 3 цифер")
      .max(50, "Максимум 50 цифер")
      .matches(/[0-9]/)
      .required("Це поле обов'язкове!"),
  });
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md  dark:bg-gray-800 shadow-md shadow-white transition-all ease-in duration-300  hover:scale-105">
      <Formik
        initialValues={{
          name: contact.name,
          number: contact.number,
        }}
        validationSchema={contactSchema}
        onSubmit={handleUpdate}
      >
        {({ handleChange, values }) => (
          <Form>
            <div className="grid grid-cols-1 gap-6 mt-4 ">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor={nameId}
                >
                  Name
                </label>
                <Field
                  id={nameId}
                  value={values.name}
                  onChange={handleChange}
                  name="name"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring shadow-md shadow-white transition-all ease-in duration-300
      hover:scale-105"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor={phoneId}
                >
                  Phone
                </label>
                <Field
                  id={phoneId}
                  value={values.number}
                  onChange={handleChange}
                  name="number"
                  type="phone"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring shadow-md shadow-white transition-all ease-in duration-300
      hover:scale-105"
                />
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-4 ">
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  UpDate
                </button>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-red-900 rounded-md hover:bg-red-800 dark:hover:bg-gray-red focus:outline-none focus:bg-red-800 dark:focus:bg-red-700"
                >
                  Close
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default UpdateContactForm;
