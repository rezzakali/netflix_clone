import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const { SignIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await SignIn(email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-full">
        <img
          className="hidden sm:block w-full h-full object-cover absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e89c9679-2f5f-491d-924c-c58924a8ee4b/8ec27a1d-02ce-4489-b320-a95106906f5d/IN-en-20221121-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="sing_in_background_image"
        />
        <div className="bg-black/60 top-0 left-0 fixed w-full h-screen"></div>
        <div className="w-full fixed px-4 py-24 z-50">
          <div className="max-w-[450px] h-[500px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-14">
              <h1 className="text-2xl font-bold mb-3">Sign In</h1>
              {error ? (
                <p className="bg-red-500 text-white py-2 px-1">{error}</p>
              ) : null}
              <form className="w-full flex flex-col" onSubmit={handleSubmit}>
                <input
                  className="p-2 my-2 bg-gray-700"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="p-2 my-2  bg-gray-700"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className="bg-red-600 py-2 px-3 rounded font-bold my-6"
                  type="submit"
                >
                  Sign In
                </button>
                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need help ? </p>
                </div>
                <p className="py-4">
                  <span className="text-gray-600">Don't have an account</span>
                  <Link to="/signup"> Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
