import './Home.scss';
import Movies from './Movies/Movies';
import Categories from './Categories/Categories';
import Header from '../Header/Header';

function Home(){
    return(
        <div className='Home'>
            <Header />
            <Categories />
            <Movies />
        </div>
    )
}

export default Home;