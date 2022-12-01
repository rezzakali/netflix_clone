import React from 'react';
import SavedMovies from './SavedMovies';

function Account() {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e89c9679-2f5f-491d-924c-c58924a8ee4b/8ec27a1d-02ce-4489-b320-a95106906f5d/IN-en-20221121-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="sing_in_background_image"
        />
        <div className="w-full h-[550px] top-0 left-0 bg-black/60 absolute"></div>
        <div className="absolute top-[20%] text-white p-4 md:p-4">
          <h1 className="text-3xl md:text-5xl font-bold">Movies</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
}

export default Account;
