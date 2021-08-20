import './App.css';
import {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import MovieList from './MovieList';

const baseurl= 'http://www.omdbapi.com';
const apikey = process.env.REACT_APP_OMDB_API_KEY;

const getMoviesBySearchTerm = async (searchTerm) => {
  try {
      //console.log(searchTerm);
      let response = await fetch(`${baseurl}/?apikey=${apikey}&s=${searchTerm}`);
      let omdires  = await response.json();
      const search = omdires.Search;
      //console.log(888,search);
      return search;
    } catch(error) {
      console.log("ERROR:", error)
    }
}

function App() {
    const [searchTerm, setSearchTerm] = useState('batman');
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(async () => {
      setIsLoading(true);
      try {
        const movieData = getMoviesBySearchTerm(searchTerm)
          .then((movieData) => {
            //console.log(111,movieData);
            //setMovies(movieData[0]);
            setMovies(movieData);
            setError(null);
            return movieData;
          })
      } catch {
        setMovies([]);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    []
    )

    return (
    <>
    {/* <MovieCard title={movies.Title} type={movies.Type} posterUrl={movies.Poster} /> */}
    <MovieList movies={movies} />
    </>
  );
}

export default App;
