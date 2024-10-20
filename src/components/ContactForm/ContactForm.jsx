import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();
  nanoid();
  // const onlyWords = /^[a-zA-Z]+$/;
  const handleSubmit = (values, options) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.phone,
      })
    );
    options.resetForm();
  };
  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Мінімум 3 символа (вибач Ян)")
      .max(50, "Максимум 22 символа")
      .required("Це поле обов'язкове!"),
    phone: Yup.string()
      .min(3, "Мінімум 3 цифер")
      .max(50, "Максимум 50 цифер")
      .matches(/[0-9]/)
      .required("Це поле обов'язкове!"),
  });

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md  dark:bg-gray-800 shadow-md shadow-white transition-all ease-in duration-300  hover:scale-105">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Phonebook
      </h2>

      <Formik
        initialValues={{
          name: "",
          phone: "",
        }}
        validationSchema={orderSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Name
              </label>
              <Field
                id={nameId}
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
                htmlFor="emailAddress"
              >
                Phone
              </label>
              <Field
                id={phoneId}
                name="phone"
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

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default ContactForm;
