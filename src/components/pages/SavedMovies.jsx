import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import { db } from '../../../FirebaseSetup';
import { UserAuth } from '../../context/AuthContext';

function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const movieRef = doc(db, 'users', `${user?.email}`);

  const deleteShowsMovie = async (id) => {
    try {
      const result = movies.filter((item) => item.id !== id);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-white p-4 font-bold md:text-xl">Shows Movies</h2>
      <div className="relative flex items-center group">
        <MdOutlineChevronLeft
          onClick={slideLeft}
          size={30}
          className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0"
        />
        <div
          id={`slider`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
        >
          {movies?.map((item, id) => (
            <div
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              key={id}
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item.img}`}
                alt={item.title}
              />
              <div className="w-full h-full absolute opacity-0 top-0 left-0 hover:bg-black/80 text-white hover:opacity-100">
                <p className="white-space-normal text-sm md:text-sm font-bold flex items-center justify-center h-full">
                  {item.title}
                </p>
                <p
                  onClick={() => deleteShowsMovie(item.id)}
                  className="absolute top-4 right-4 text-gray-300"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdOutlineChevronRight
          onClick={slideRight}
          size={30}
          className="bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block right-0"
        />
      </div>
    </div>
  );
}

export default SavedMovies;
