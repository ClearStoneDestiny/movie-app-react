import './Categories.scss';
import action from '../../../assets/icons/action.svg';
import adventure from '../../../assets/icons/adventure.png';
import animation from '../../../assets/icons/animation.svg';
import comedy from '../../../assets/icons/comedy.png';
import crime from '../../../assets/icons/crime.png';
import documentary from '../../../assets/icons/documentary.png';
import drama from '../../../assets/icons/drama.svg';
import family from '../../../assets/icons/family.png';
import fantasy from '../../../assets/icons/fantasy.svg';
import history from '../../../assets/icons/history.png';
import horror from '../../../assets/icons/horror.svg';
import music from '../../../assets/icons/music.svg';
import mystery from '../../../assets/icons/mystery.svg';
import romance from '../../../assets/icons/romance.svg';
import scienceFiction from '../../../assets/icons/fiction.png';
import tvMovies from '../../../assets/icons/tv-movie.svg';
import thriller from '../../../assets/icons/thriller.svg';
import war from '../../../assets/icons/war.svg';
import western from '../../../assets/icons/western.png';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopularMovies } from '../../../slices/popularMoviesSlice';
import { fetchActorId } from '../../../slices/actorIdSlice';
import { setGenres, setYear, resetFilters, setActorName } from '../../../slices/filtersSlice';
import { useEffect, useState } from 'react';
import { fetchTotalPages } from '../../../slices/totalPagesSlice';

function Categories(){

    let dispatch = useDispatch();
    let nameOfActor = useSelector(state => state.filters.actorName);
    let name = useSelector(state => state.filters.actor);
    let year = useSelector(state => state.filters.year)
    let genre = useSelector(state => state.filters.genre);
    let category = useSelector(state => state.filters.category);

    function genreHandler(e){
        const genreId = e.target.dataset.genreId;
        console.log(genre);
        dispatch(setGenres(genreId));
    }

    function actorNameHandler(e){
        let actorName = e.target.value; 
        dispatch(setActorName(actorName));
    }

    function actorHandler(e){
        e.preventDefault();
        dispatch(fetchActorId(nameOfActor));
    }

    function yearHandler(e){
        let selectedYear = e.target.value;
        dispatch(setYear(selectedYear))
    } 

    function resetHandler(){
        dispatch(resetFilters());
    }

    useEffect(() => {
        dispatch(fetchPopularMovies()); 
    }, [genre, name, year, category]);

    return(
        <nav className='Categories'>
            <div className="Filters1">
                <div className="Filters-container">
                    <h2>Filters</h2><div className="Filter">
                        <h3>Release Date</h3>
                        <select className="Filter-input" onChange={(e) => yearHandler(e)} value={year || "all"}>
                            <option value="all">All Years</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                        </select>
                    </div>
                    <div className="Actor-container">
                        <h3>Actor name</h3>
                        <form onSubmit={actorHandler}>
                            <input className="Actor-input" onChange={(e) => actorNameHandler(e)} value={nameOfActor}/>
                            <div className="Buttons-container">
                                <button type='submit'>Submit</button>
                                <button onClick={() => resetHandler()}>Reset</button>
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
            </div>
            <div className="Genres" onClick={(e) => genreHandler(e)}>
                <div className="Genre" data-genre-id="28">
                    Action
                    <img src={action} alt="" />
                </div>
                <div className="Genre" data-genre-id="12">
                    Adventure
                    <img src={adventure} alt="Adventure" />
                </div>
                <div className="Genre" data-genre-id="16">
                    Animation
                    <img src={animation} alt="Animation" />
                </div>
                <div className="Genre" data-genre-id="35">
                    Comedy
                    <img src={comedy} alt="Comedy" />
                </div>
                <div className="Genre" data-genre-id="80">
                    Crime
                    <img src={crime} alt="Crime" />
                </div>
                <div className="Genre" data-genre-id="99">
                    Documentary
                    <img src={documentary} alt="Documentary" />
                </div>
                <div className="Genre" data-genre-id="18">
                    Drama
                    <img src={drama} alt="Drama" />
                </div>
                <div className="Genre" data-genre-id="10751">
                    Family
                    <img src={family} alt="Family" />
                </div>
                <div className="Genre" data-genre-id="14">
                    Fantasy
                    <img src={fantasy} alt="Fantasy" />
                </div>
                <div className="Genre" data-genre-id="36">
                    History
                    <img src={history} alt="History" />
                </div>
                <div className="Genre" data-genre-id="27">
                    Horror
                    <img src={horror} alt="Horror" />
                </div>
                <div className="Genre" data-genre-id="10402">
                    Music
                    <img src={music} alt="Music" />
                </div>
                <div className="Genre" data-genre-id="9648">
                    Mystery
                    <img src={mystery} alt="Mystery" />
                </div>
                <div className="Genre" data-genre-id="10749">
                    Romance
                    <img src={romance} alt="Romance" />
                </div>
                <div className="Genre" data-genre-id="878">
                    Science Fiction
                    <img src={scienceFiction} alt="Science Fiction" />
                </div>
                <div className="Genre" data-genre-id="10770">
                    TV Movie
                    <img src={tvMovies} alt="TV Movie" />
                </div>
                <div className="Genre" data-genre-id="53">
                    Thriller
                    <img src={thriller} alt="Thriller" />
                </div>
                <div className="Genre" data-genre-id="10752">
                    War
                    <img src={war} alt="War" />
                </div>
                <div className="Genre" data-genre-id="37">
                    Western
                    <img src={western} alt="Western" />
                </div>
  
            </div>
        </nav>
    )
}

export default Categories;