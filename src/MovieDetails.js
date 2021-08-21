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
            <div  className="movie-details-inforow">
                <div className="movie-details-title">{title}</div>
                <div className="movie-details-rated">{rated}</div>
            </div>
            <div   className="movie-details-inforow">
                <span className="movie-details-rating">{rating}</span>
                <span className="movie-details-runtime">{runtime}</span>
            </div>
            <span className="movie-details-genre">{genre}</span>
            <div   className="movie-details-inforow">
                <p className="movie-details-textlrg">Plot</p>
            </div>            
            <div   className="movie-details-inforow">
                <p className="movie-details-plot">{plot}</p>
            </div>
            <div   className="movie-details-inforow">
                <p className="movie-details-textlrg">Actors</p>
            </div>  
            <div   className="movie-details-inforow">
                <p className="movie-details-actors">{actors}</p>
            </div>
        </div>
    </div>
    )
}

export default MovieDetails;