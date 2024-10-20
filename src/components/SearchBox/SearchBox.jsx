import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectedNameFilter } from "../../redux/filters/selectors";
const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectedNameFilter);
  const searchId = useId();
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md  dark:bg-gray-800 shadow-md shadow-white mt-6 transition-all ease-in duration-300  hover:scale-105">
      <label
        htmlFor={searchId}
        className="text-lg font-semibold text-gray-700 capitalize dark:text-white"
      >
        Find contacts by name
      </label>
      <input
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring shadow-md shadow-white transition-all ease-in duration-300
      hover:scale-105"
        id={searchId}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Enter name..."
      />
    </section>
  );
};

export default SearchBox;
