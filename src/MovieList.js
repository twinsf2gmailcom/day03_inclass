import './MovieList.css';
import MovieCard from './MovieCard';

// my program
// const MovieList = ({movies}) => {
    
//     // const posterItems = movies.map((movie) =>
//     //     <img src={movie.Poster} alt={movie.Title}/>
//     // );

//     // const titleItems = movies.map((movie) =>
//     //     <p>{movie.Title}</p>
//     // );

//     // const typeItems = movies.map((movie) =>
//     //     <div >
//     //         <span className="movie-card-pill">{movie.Type}</span>
//     //     </div>
//     // );

//     const posterItems = movies.map((movie) =>
         
//         <div className="movie-card"> 
//             <img src={movie.Poster} alt={movie.Title} />
//             <div className="movie-card-info">
//                 <p>{movie.Title}</p>
//                 <div >
//                     <span className="movie-card-pill">{movie.Type}</span>
//                 </div>
//             </div>
//         </div>
//      );
//     return (
//           posterItems
//     )
// }

//teacher program
const MovieList = ({movies = [], setMovieID}) => {
    return (
        <div className="container">
            {movies.map((movie) => (
                <MovieCard 
                key={movie.imdbID} 
                posterUrl={movie.Poster}
                title={movie.Title}
                type={movie.Type}
                onClicked = {() => setMovieID(movie.imdbID)}
                />
            ))}
        </div>
    )}

export default MovieList;


// const MovieList = ({movies}) => {
//     const posterItems = movies.map((movie) =>
//     <img src={movie.Poster} alt={movie.Title}/>
//     );

//     const titleItems = movies.map((movie) =>
//     <p>{movie.title}</p>
//     );

//     const titleItems = movies.map((movie) =>
//     <p>{movie.title}</p>
//     );
//     return (
//         <MovieCard title={movies.Title} type={movies.Type} posterUrl={movies.Poster} />
//     )
// }

// export default MovieCard;