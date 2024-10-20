import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <div className="h-[90vh]">
      <div className="lg:flex h-full">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">
              Hello{" "}
              {isLoggedIn ? (
                <span className="text-blue-400">{user.name}</span>
              ) : (
                <span className="text-blue-400">Guest</span>
              )}
            </h2>
            <p className="mt-4 text-gray-100">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
              eum modi incidunt adipisci quod porro et non exercitationem quasi,
              maxime culpa ut nemo ab delectus saepe iste nostrum explicabo a?
            </p>
          </div>
        </div>

        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <div
            className="w-full h-full bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)",
            }}
          >
            <div className="w-full h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
