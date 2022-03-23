/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const MovieLists = ({movies, handleFavClick, favourite}) => {
  const Favourite = favourite;
console.log(movies);
  return (
    <div className='overflow-x-scroll flex flex-row space-x-5 scrolll'>
      {movies.map(movie => (
        <div class="relative rounded">
           <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300"> 
            <h1 class='tracking-wider' >{movie.Title}</h1>
            <div
            	onClick={() => handleFavClick(movie)}
              >
            <Favourite/>

            </div>
          </a> 
          <a href="#" class="relative">
            <div class="h-80 w-80 flex flex-wrap content-center rounded-xl">
              <img src={movie.Poster} title={movie.Title} alt='movie' className='w-80 h-80 rounded-xl' />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default MovieLists;