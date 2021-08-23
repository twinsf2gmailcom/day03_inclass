import './MovieCard.css';

const MovieCard = ({posterUrl, title, type, onClicked}) => {
    return (
    <div className="movie-card" onClick = {onClicked}>
        <img src={posterUrl} alt={title}/>
        <div className="movie-card-info">
            <p>{title}</p>
            <div>
              <span className="movie-card-pill">{type}</span>
            </div>
        </div>
    </div>
    )
}

export default MovieCard;