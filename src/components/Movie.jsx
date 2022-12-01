import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { db } from '../../FirebaseSetup';
import { UserAuth } from '../context/AuthContext';

function Movie({ item }) {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);

  const { user } = UserAuth();

  const movieId = doc(db, 'users', `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save movie!');
    }
  };

  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
          alt={item.title}
        />
        <div className="w-full h-full absolute opacity-0 top-0 left-0 hover:bg-black/80 text-white hover:opacity-100">
          <p className="white-space-normal text-sm md:text-sm font-bold flex items-center justify-center h-full">
            {item.title}
          </p>
          <p onClick={saveShow}>
            {like ? (
              <FaHeart className="top-4 left-4 absolute text-gray-300" />
            ) : (
              <FaRegHeart className="top-4 left-4 absolute text-gray-300" />
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default Movie;
