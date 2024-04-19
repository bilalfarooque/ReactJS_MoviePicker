import React, { useContext, useEffect } from 'react';
import popcorn from '../../Images/popcorn.png'
import './Navbar.css'
import { MovieContext } from '../../Context/context.jsx';

// Accessing the API key
const ApiKey = import.meta.env.VITE_API_KEY;

const Navbar = () => {

  const {search,setSearch,movie, setMovie} = useContext(MovieContext)
  
  const handleSearch = (e)=>{
    e.preventDefault()
    fetchApi(search);
  }


    const fetchApi = async (search) => {
      try {
        if (search) {
          const response = await fetch(
            `https://www.omdbapi.com/?s=${search}&&apikey=${ApiKey}&&page=1`
          );
          const result = await response.json();
          const length = result.totalResults;
          setMovie(result.Search);
        }
      } catch (error) {
        console.log("Error =>", error);
      }
    };
  

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={popcorn} alt=''/>
        <h4>usePopcorn</h4>
      </div>
      <div className='search'>
        <input type='text' placeholder='Search movies...' onChange={(e)=> setSearch(e.target.value)} />
        <button className="search-btn"  onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className='result'>
        <h3>Found {movie ? movie.length:0} top results</h3>
      </div>
    </div>
  )
}

export default Navbar
