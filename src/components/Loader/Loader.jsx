import { Vortex } from "react-loader-spinner";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div className="flex justify-center">
      <Vortex height="100" width="100" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
