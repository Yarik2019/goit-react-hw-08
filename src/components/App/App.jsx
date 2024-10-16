// import s from "./App.module.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

// import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));

function App() {
  return (
    <Suspense fallback={<h1>loading</h1>}>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/login" element={<RestrictedRoute />}></Route> */}
      </Routes>
    </Suspense>
  );
}

export default App;
