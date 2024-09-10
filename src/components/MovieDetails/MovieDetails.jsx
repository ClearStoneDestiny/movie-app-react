import './MovieDetails.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchMovieInfo } from '../../slices/movieInfoSlice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActors } from '../../slices/actorsSlice';
import { fetchTrailers } from '../../slices/trailersSlice';

function MovieDetails(){

    const { id } = useParams();
    const dispatch = useDispatch();
    const movieInfo = useSelector(state => state.movieInfo.movie);
    const actorsInfo = useSelector(state => state.actorsInfo.actors);
    const trailers = useSelector(state => state.trailers.trailers)
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";

    // console.log(movieInfo);
    // console.log(actorsInfo);
    // console.log(trailers);
    

    useEffect(() => {
        dispatch(fetchMovieInfo(id));
        dispatch(fetchActors(id));
        dispatch(fetchTrailers(id));
    }, [dispatch, id]);

    return(
        <div>
            <div className="Main-info-container">
                <img className='Poster' src={IMGPATH + movieInfo.poster_path} alt={movieInfo.title} />
                <div className='Main-text'>
                    <div className="Title-container">
                        <div className="Text">
                            <h3>{movieInfo.title}</h3>
                            <p className='Slogan'>{movieInfo.tagline}</p>
                        </div>
                        <div className="Rating">
                            <span className='f'>{movieInfo.formattedRating}</span>
                            <p>{movieInfo.status}</p>
                        </div>
                    </div>
                    <div className="Text-info">
                        <p>
                            <span className='Text-info-span'>Budget:</span>
                            {movieInfo.budget ? movieInfo.budget.toLocaleString() + '$' : 'N/A'}
                        </p>
                        <p>
                            <span className='Text-info-span'>Revenue:</span>
                            {movieInfo.revenue ? movieInfo.revenue.toLocaleString() + '$' : 'N/A'}
                        </p>
                        <p>
                            <span className='Text-info-span'>Release Date:</span>
                            {movieInfo.formattedReleaseDate || 'N/A'}
                        </p>
                        <p>
                            <span className='Text-info-span'>Runtime:</span>
                            {movieInfo.runtime ? movieInfo.runtime + ' mins' : 'N/A'}
                        </p>
                        <p>
                            <span className='Text-info-span'>Spoken languages:</span>
                            {movieInfo.spoken_languages && movieInfo.spoken_languages.length > 0
                                ? movieInfo.spoken_languages[0].english_name
                                : 'N/A'}
                        </p>
                    </div>
                    <hr />
                    <div className="overView-container">
                        <p>{movieInfo.overview}</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="Trailer-container">
                <div className="Iframe-container">
                    {trailers && trailers.length > 0 ? (
                    trailers
                    .filter((trailer) => trailer.type === 'Trailer' && trailer.site === 'YouTube')
                    .slice(0, 1)
                    .map((trailer) => (
                        <iframe
                        className='Iframe'
                        key={trailer.id}
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        frameBorder="0"
                        allowFullScreen
                        title={trailer.name}
                        ></iframe>
                    ))
                ) : (
                    <p>No trailers available</p>
                )}
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;