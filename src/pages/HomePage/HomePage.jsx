import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import ErrorMessages from "../../components/ErrorMessages/ErrorMessages";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { selectIsError, selectIsLoading } from "../../redux/selectors";
import { fetchContacts } from "../../redux/contactsOps";

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <SearchBox />
      {isLoading && !isError && <Loader />}
      {isError && <ErrorMessages message={isError} />}
      <ContactList />
    </div>
  );
};

export default HomePage;
