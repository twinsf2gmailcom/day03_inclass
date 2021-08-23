import MovieDetails from './MovieDetails';
import './Modal.css';

const Modal = ({show = false, onClose, children, movieDetails, onClickBtn}) => {
    return (
        <div className="container-details">
            <MovieDetails 
            title={movieDetails.Title}
            type={movieDetails.Type}
            posterUrl={movieDetails.Poster}
            rating={movieDetails.Rated}
            rated={movieDetails.imdbRating}
            runtime={movieDetails.Runtime}
            genre={movieDetails.Genre}
            plot={movieDetails.Plot}
            actors={movieDetails.Actors}
            onClickBtn = {onClickBtn}
            />
        </div>
         
    )
}

export default Modal;