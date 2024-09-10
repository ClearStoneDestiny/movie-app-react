import './Header.scss';
import { setCategory } from '../../slices/filtersSlice';
import { useDispatch } from 'react-redux';

function Header(){

    let dispatch = useDispatch();

    function categoryHandler(e){
        let categoryValue = e.target.innerHTML;
        dispatch(setCategory(categoryValue))
        console.log(categoryValue);
        
    }

    return(
        <header className='Header'>
            <div className="Filter">
                <h3>Sort By Rating</h3>
                <button onClick={(e) => categoryHandler(e)}>Movie</button>
                <button onClick={(e) => categoryHandler(e)}>Tv series</button>
            </div>
        </header>
    )
}

export default Header;
