import './MovieDetails.css';

// Create a new component called MovieDetails.
// The component should take the following props: posterUrl, title, rated, runtime, genre, plot, actors, rating.
// The component should render UI as shown below (use styles or className for styling).

const MovieDetails = ({posterUrl,title,rating,rated,runtime,genre,plot,actors}) => {
    return (
    <div className="movie-details">
        <div className="movie-details-img">
            <img src={posterUrl} alt={title}/>
        </div>
        <div className="movie-details-info">
            <div>
                <p className="movie-details-title">{title}</p>
                <p className="movie-details-rating">{rating}</p>
            </div>
            <div >
                <span className="movie-details-rated">{rated}</span>
                <span className="movie-details-runtime">{runtime}</span>
            </div>
            <span className="movie-details-genre">{genre}</span>
            <div>
                <p className="movie-details-plot">{plot}</p>
                <p className="movie-details-actors">{actors}</p>
            </div>
        </div>
    </div>
    )
}

export default MovieDetails;