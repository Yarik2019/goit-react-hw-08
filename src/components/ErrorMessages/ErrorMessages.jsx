import s from "./ErrorMessages.module.css";
const ErrorMessages = ({ message }) => {
  return (
    <div>
      <p className={s.error}>{message}</p>
    </div>
  );
};

export default ErrorMessages;
