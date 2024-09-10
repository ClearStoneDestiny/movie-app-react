import './Movies.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../../slices/popularMoviesSlice';
import MovieTile from './MovieTile/MovieTile.jsx';
import Preloader from '../../Preloader/Preloader.jsx';
import NoResults from '../NoResults/NoResults.jsx';
import Pagination from './Pagination/Pagination.jsx';

function Movies(){

    const dispatch = useDispatch();
    const movies = useSelector((state) => state.popularMovies.movies);
    const status = useSelector((state) => state.popularMovies.status);
    const error = useSelector((state) => state.popularMovies.error);
    let page = useSelector(state => state.filters.page);

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch, page]);

    console.log(movies);
    
    return (
        <main className='Movies'>
            <div className="Movie-grid">
                {status === 'loading' && <Preloader />}
                {status === 'failed' && <p>Error: {error}</p>}
                {status === 'succeeded' && (
                    movies.length > 1 ? (
                        movies.map((movie) => <MovieTile movie={movie} key={movie.id}/>)
                    ) : (
                        <NoResults />
                    )
                )}
            </div>
            <Pagination />
        </main>
    );
}

export default Movies;
