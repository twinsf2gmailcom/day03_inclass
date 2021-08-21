import './App.css';
import {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import {getMoviesBySearchTerm, getMovieDetailsById} from './utils.js'

function App() {
    const [searchTerm, setSearchTerm] = useState('horse');
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [wasClicked, setWasClicked] = useState(false);

    const handleMvCrdClick = (() => {
      console.log('Movie Clicked')
    })

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
    {/* {isLoading ? <p>Loading.App.App.</p> : <p>Data Fetched</p>} */}
    {isLoading 
      ? (<p>Loading...</p> )
      : (
         <>
            <MovieList movies={movies} onMovieCardClick={handleMvCrdClick} />
          </>
      )}
    {/* <MovieCard title='batman' type='movie' posterUrl="https://posterstore.com/images/zoom/batman.jpg" /> */}
    {/* <MovieDetails title='batman' type='movie' posterUrl="https://posterstore.com/images/zoom/batman.jpg" rating='PG' rated='7.8' runtime='109 min' genre='Comedy, Crime, Drama' plot='Rupert Pupkin is a passionate yet unsuccessful comic who craves nothing more than to be in the spotlight and to achieve this, he stalks and kidnaps his idol to take the spotlight for himself.' actors='Robert De Niro, Jerry Lewis, Diahnne Abbott' /> */}
    </>
  );
}

export default App;
