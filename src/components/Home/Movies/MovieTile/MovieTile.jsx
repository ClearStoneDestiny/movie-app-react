import './MovieTile.scss';
import { useSelector } from 'react-redux';
import notFound from '../../../../assets/img/not_found.png';
import { useNavigate } from 'react-router-dom';

function MovieTile({movie}){

    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const category = useSelector(state => state.filters.category);
    const navigate = useNavigate();

    function showMovieInfo(movie){
        console.log(movie.id);
        let movieId = movie.id
        navigate(`/${movieId}`)
    }

    return(
        <div className='MovieTile' onClick={() => showMovieInfo(movie)}>
            <img src={movie.poster_path ? IMGPATH + movie.poster_path : notFound} alt={movie.title} />
            <div className='Movie-info'>
                {category === 'Movie' ? <h2>{movie.title}</h2> : <h2>{movie.name}</h2>}
                <p>{movie.formattedRating}</p>
                <p>{movie.formattedReleaseDate}</p>
            </div>
        </div>
    )
}

export default MovieTile;