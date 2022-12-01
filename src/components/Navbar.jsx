import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Navbar() {
  const { user, SignOut } = UserAuth();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await SignOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 font-bold sm:text-4xl md:text-6xl lg:text-6xl cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div>
        {user?.email ? (
          <>
            <Link to="/account">
              <button className="text-white mx-3 px-2 py-1 border border-gray-200">
                Account
              </button>
            </Link>
            <button
              className="text-white bg-red-600 mx-2  px-3 py-1"
              onClick={logoutHandler}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/signin">
              <button className="text-white mx-3 px-2 py-1 border border-gray-200">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="text-white bg-red-600 mx-2  px-3 py-1">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
