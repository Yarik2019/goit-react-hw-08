import { Outlet } from "react-router-dom";

const RestrictedRoute = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RestrictedRoute;
