import { useEffect, useState } from 'react'

import './App.css'
import Card from './Components/Cards/Card';
import Navbar from './Components/Navbar/Navbar';

// Accessing the API key
const ApiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [movie , setMovie] = useState([])
  const [search, setSearch] = useState('')
  const [movieWatched, setMovieWatched] = useState(true)
  const [moviedetails, setMovieDetails] =useState(false)
  const [watchingList, setWatchingList] = useState([])
  const [movieObj , setMovieObj] = useState({})
  const [starRating, setStarRating] = useState(null);


  useEffect(()=>{
    const fetchApi = async (search) =>{
      try{
        if(search) {
          const response = await fetch(`https://www.omdbapi.com/?s=${search}&&apikey=${ApiKey}&&page=1`)
          const result = await response.json()
          const length = result.totalResults
          setMovie(result.Search)
          
        }
      }catch (error){
        console.log("Error =>", error)
      }
    }
    fetchApi(search)
  }, [search])

  return (
    <>
    <div className="main">
      <Navbar
        search = {search}
        setSearch = {setSearch}
        movie={movie}
      />
      
      <Card
        movie={movie}
        setMovie={setMovie}
        search={search}
        movieWatched={movieWatched}
        setMovieWatched={setMovieWatched}
        moviedetails={moviedetails}
        setMovieDetails={setMovieDetails}
        movieObj={movieObj}
        setMovieObj={setMovieObj}
        watchingList={watchingList}
        setWatchingList={setWatchingList}
        starRating ={starRating}
        setStarRating ={setStarRating}

      />

    </div>
      
    </>
  )
}

export default App
