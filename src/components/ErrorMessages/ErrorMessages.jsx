const ErrorMessages = ({ message }) => {
  return (
    <div className="max-w-4xl p-6 mx-auto bg-white rounded-md  dark:bg-gray-800 shadow-md shadow-white mt-6 transition-all ease-in duration-300  hover:scale-105">
      <p className="text-red-400">{message}</p>
    </div>
  );
};

export default ErrorMessages;
