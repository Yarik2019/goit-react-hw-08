import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

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
    <Formik
      initialValues={{
        name: "",
        phone: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={orderSchema}
    >
      <Form className={s.blockForm}>
        <div className={s.formGroup}>
          <label htmlFor={nameId} className={s.formLabel}>
            Name:
          </label>
          <Field
            className={s.formInput}
            id={nameId}
            name="name"
            type="text"
            placeholder="Name"
          />
          <ErrorMessage name="name" className={s.error} component="p" />
        </div>
        <div className={s.formGroup}>
          <label htmlFor={phoneId} className={s.formLabel}>
            Phone:
          </label>
          <Field
            className={s.formInput}
            id={phoneId}
            name="phone"
            type="number"
            placeholder="Phone"
          />
          <ErrorMessage name="phone" className={s.error} component="p" />
        </div>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
