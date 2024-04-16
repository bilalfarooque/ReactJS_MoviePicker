import React, { useEffect, useState } from 'react'
import '../MovieList/MovieList.css'
import calender from '../../Images/calender.png'

// Accessing the API key
const ApiKey = import.meta.env.VITE_API_KEY;

const MovieList = ({ movie, setMovie, search, movieWatched, setMovieWatched, movieObj, setMovieObj, moviedetails, setMovieDetails,starRating, setStarRating }) => {

  const detailsMovie = async (id) => {
    console.log(id)
    try {
      const Response = await fetch(`https://www.omdbapi.com/?i=${id}&&apikey=${ApiKey}`)
      const result = await Response.json()
      console.log(result)
      const movieobject = { ...result }
      setMovieObj(() => movieobject)
      setMovieWatched(false)
      setMovieDetails(true)
      setStarRating(0)
    } catch (error) {
      console.log(error)
    }
    // const find = movie.find((e) => e.imdbID === id)
    // console.log(find)
    // const movieobject = {...find}
    // setMovieObj(()=>movieobject)
    // setMovieWatched(false)
    // setMovieDetails(true)
  }


  // Math.ceil(array.length / 10)
  return (
    <div className='movielist'>
      {movie ? <p id='loading'></p> : (search && <p id='loading'>LOADING.....</p>)}
      <div className='moviesitem'>
        {movie && movie.map((Singlemovie, index) => (
          <div className='sigmovie' onClick={() => detailsMovie(Singlemovie.imdbID, index= index)}>
            <img src={Singlemovie.Poster} alt='' id='poster' />
            <div id='movieInfo'>
              <h3>{Singlemovie.Title}</h3>
              <div id='releaseDate'>
                <img src={calender} alt="" />
                <p>{Singlemovie.Year}</p>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default MovieList
