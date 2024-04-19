import React, { createContext, useState } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {


 const [movie, setMovie] = useState([]);
 const [search, setSearch] = useState('');
 const [movieWatched, setMovieWatched] = useState(true);
 const [moviedetails, setMovieDetails] = useState(false);
 const [watchingList, setWatchingList] = useState([]);
 const [movieObj, setMovieObj] = useState({});
 const [starRating, setStarRating] = useState(null);

 return (
    <MovieContext.Provider value={{
      movie, setMovie,
      search, setSearch,
      movieWatched, setMovieWatched,
      moviedetails, setMovieDetails,
      watchingList, setWatchingList,
      movieObj, setMovieObj,
      starRating, setStarRating
    }}>
      {children}
    </MovieContext.Provider>
 );
};

export { MovieContext};
