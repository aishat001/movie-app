import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './components/Header';
import MovieLists from './components/Movies';
import AddFavouriteMovie from './components/AddFavouriteMovie'
import RemoveFavouriteMovie from './components/RemoveFavouriteMovie'


function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('star wars');
  const [favourites, setFavourites] = useState([]);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a4381a9c`;
    console.log(url);

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }, [searchValue]);


  useEffect(() => {

    const favourites = JSON.parse(localStorage.getItem('favourites'));

    setFavourites(favourites);

  }, []);

  const saveToLocalStorage = (items) => { localStorage.setItem('favourites', JSON.stringify(items)); }


  // add to favourites

  const addFavourite = (movie) => {
let filteredFavourites = favourites.filter(fav => fav.imdbID !== movie.imdbID)

      const newFavouriteList = [...filteredFavourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);


  };

  // Remove Fvourites
  const removeFavourite = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
console.log(newFavouriteList);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className=''>
      <Header />
      <div className='cinema flex  px-10 py-20 sm:px-20 md:py-48 justify-center md:justify-start '>
        <h1 className='flex  text-center md:text-left md text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-white w-64 sm:w-60 md:w-96 font-bold'>Watch something incredible.</h1>
      </div>

      <div className='px-5 sm:px-10 md:px-20 py-20 '>
        <label htmlFor="" className='p-2 pl-0 text-2xl'>Search
          <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            type="search" name="search" id="" className=" border border-1 border-black form-control block w-full px-3 py-1.5 text-base font-normal" />
        </label>

        <h1 className="mt-10 p-2 pl-0 text-2xl">movies</h1>

        <MovieLists movies={movies} handleFavClick={addFavourite} favourite={AddFavouriteMovie} />

        <h1 className="mt-10 p-2 pl-0 text-2xl">My Favourite</h1>

        <MovieLists movies={favourites} handleFavClick={removeFavourite} favourite={RemoveFavouriteMovie} />

      </div>

    </div>
  )
}

export default App
