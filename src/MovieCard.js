import './MovieCard.css';

const MovieCard = (props) => {
    return (
    <div className="movie-card">
        <img src={props.posterUrl} alt={props.title}/>
        <div className="movie-card-info">
            <p>{props.title}</p>
            <div >
              <span className="movie-card-pill">{props.type}</span>
            </div>
        </div>
    </div>
    )
}

export default MovieCard;