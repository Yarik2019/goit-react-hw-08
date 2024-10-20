import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-gray-900 shadow shadow-white pattern">
      <div className="container px-6 mx-auto">
        <nav className="px-6 py-4 shadow">
          <div className="lg:items-center lg:justify-between lg:flex">
            <div className="flex items-center justify-between">
              <NavLink to="/" className="mx-auto">
                <img
                  className="w-auto h-6 sm:h-7"
                  src="https://merakiui.com/images/full-logo.svg"
                  alt="Logo"
                />
              </NavLink>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                  onClick={toggleMenu}
                >
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
                <NavLink
                  to="/"
                  className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/contacts"
                  className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                >
                  Contacts
                </NavLink>

                {!isLoggedIn && (
                  <>
                    <NavLink
                      to="/login"
                      className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                    >
                      LogIn
                    </NavLink>
                    <NavLink
                      to="/registration"
                      className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                    >
                      Register
                    </NavLink>
                  </>
                )}
                {isLoggedIn && (
                  <button
                    onClick={() => dispatch(logOut())}
                    className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                  >
                    LogOut
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
