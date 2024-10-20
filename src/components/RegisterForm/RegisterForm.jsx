import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
const RegisterForm = () => {
  const dispatch = useDispatch();

  const initForm = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .min(8, "Password must contain at least 8 characters")
      .matches(
        /[a-z]/,
        "The password must contain at least 1 letter in lowercase"
      )
      .matches(
        /[A-Z]/,
        "The password must contain at leats 1 letter in uppercase"
      )
      .matches(/\d/, "The password must contain at least 1 number")
      .required("Password is required"),
  });

  return (
    <div className="flex mt-9 w-full  max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
      {/* Background image on larger screens */}
      <div
        className="hidden bg-cover lg:block lg:w-1/2"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')`,
        }}
      ></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt="Logo"
          />
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
          Welcome Register!
        </p>

        {/* Sign in with Google */}
        <a
          href="#"
          className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <div className="px-4 py-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40">
              {/* SVG paths */}
              {/* Google Logo SVG */}
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#FFC107"
              />
              {/* Other paths */}
            </svg>
          </div>

          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Register in with Google
          </span>
        </a>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or Register with email
          </a>
          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        {/* Email input */}
        <Formik
          initialValues={initForm}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form action="#">
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="RegisterName"
              >
                Name
              </label>
              <Field
                name="name"
                id="RegisterName"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 shadow-md shadow-white transition-all ease-in duration-300
      hover:scale-105"
                type="text"
              />
              <ErrorMessage
                className="text-red-700"
                name="name"
                component="span"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="RegisterEmailAddress"
              >
                Email Address
              </label>
              <Field
                name="email"
                id="RegisterEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 shadow-md shadow-white transition-all ease-in duration-300
      hover:scale-105"
                type="email"
              />
              <ErrorMessage
                className="text-red-700"
                name="email"
                component="span"
              />
            </div>

            {/* Password input */}
            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="RegisterPassword"
                >
                  Password
                </label>
              </div>
              <Field
                name="password"
                id="RegisterPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 shadow-md shadow-white transition-all ease-in duration-300
         hover:scale-105"
                type="password"
              />
              <ErrorMessage
                className="text-red-700"
                name="password"
                component="span"
              />
            </div>

            {/* Sign In button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Register
              </button>
            </div>
          </Form>
        </Formik>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          <NavLink
            to="/login"
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or Login
          </NavLink>
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
