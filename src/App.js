import './App.css';
import {useEffect, useState} from 'react';
// import MovieCard from './MovieCard';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import Modal from './Modal';
import {getMoviesBySearchTerm, getMovieDetailsById} from './utils.js'

function App() {
    const [searchTerm, setSearchTerm] = useState('horse');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [wasClicked, setWasClicked] = useState(false);
    const [movieID,setMovieID] = useState(null);
    const [movieDetails,setMovieDetails] = useState(null);
    // const [movies, setMovies] = useState(false);

    useEffect(async () => {
      setIsLoading(true);
      try {
        const movieData = await getMoviesBySearchTerm(searchTerm)
            //console.log(111,movieData);
            //setMovies(movieData[0]);
            setMovies(movieData);
            setError(null);
      } catch {
        setMovies([]);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    []
    )

    useEffect(async () => {
      if (movieID) {
        setIsLoading2(false);
        try {
          const movieData = await getMovieDetailsById(movieID)
              //console.log(111,movieData);
              //setMovies(movieData[0]);
              setMovieDetails(movieData);
              setError(null);
        } catch {
          setMovieDetails(null);
          setError(error);
        } finally {
          setIsLoading2(true);
        }
      }
    },
    [movieID]
    )
    // console.log(movieDetails);
    

    
    return (
      <>
      {isLoading 
        ? (<p>Loading...</p> )
        : (
            <>
              <MovieList movies={movies} setMovieID={setMovieID} />
            </>
        )}
      {!isLoading2 
        ? (<p style={{display: "none"}}> </p> )
        : (
            <>
            <Modal movieDetails={movieDetails}  onClickBtn = {() => console.log('Close')}/>
            </>
        )}

   </>  
  );
}

export default App;
