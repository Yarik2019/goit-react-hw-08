import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const PrivateRoute = () => {
  return (
    <>
      <Header />
      <h1 className="">Phonebook</h1>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
