import React from 'react'
import './Card.css'
import MovieList from '../MovieList/MovieList'
import MovieWatched from '../MovieWatched/MovieWatched'


const Card = ({ movie, setMovie, search, movieWatched, setMovieWatched, movieObj, setMovieObj,moviedetails,setMovieDetails,watchingList,setWatchingList,starRating, setStarRating }) => {
  return (
    <div className='moviedetails'>
      <MovieList
        movie={movie}
        setMovie={setMovie}
        search={search}
        movieWatched={movieWatched}
        setMovieWatched={setMovieWatched}
        movieObj={movieObj}
        setMovieObj={setMovieObj}
        moviedetails={moviedetails}
        setMovieDetails={setMovieDetails}
        starRating ={starRating}
        setStarRating ={setStarRating}
      />
      <MovieWatched
        movieWatched={movieWatched}
        setMovieWatched={setMovieWatched}
        moviedetails={moviedetails}
        setMovieDetails={setMovieDetails}
        watchingList={watchingList}
        setWatchingList={setWatchingList}
        movieObj={movieObj}
        starRating ={starRating}
        setStarRating ={setStarRating} />
    </div>
  )
}

export default Card
