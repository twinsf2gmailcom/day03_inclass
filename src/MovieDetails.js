import './MovieDetails.css';

// Create a new component called MovieDetails.
// The component should take the following props: posterUrl, title, rated, runtime, genre, plot, actors, rating.
// The component should render UI as shown below (use styles or className for styling).

const MovieDetails = (props) => {
    return (
    <div className="movie-card">
        <img src={props.posterUrl} alt={props.title}/>
        <div className="movie-card-info">
            <div>
                <p className="movie-title">{props.title}</p>
                <p className="movie-rating">{props.rating}</p>
            </div>
            <div >
                <span className="movie-rated">{props.rated}</span>
                <span className="movie-runtime">{props.runtime}</span>
            </div>
            <span className="movie-genre">{props.genre}</span>
            <div>
                <p className="movie-plot">{props.plot}</p>
                <p className="movie-actors">{props.actors}</p>
            </div>
        </div>
    </div>
    )
}

export default MovieDetails;