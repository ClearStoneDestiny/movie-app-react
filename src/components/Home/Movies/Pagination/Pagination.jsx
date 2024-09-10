import { useSelector, useDispatch } from 'react-redux';
import './Pagination.scss';
import ReactPaginate from 'react-paginate';
import { setPage } from '../../../../slices/filtersSlice';

function Pagination(){

    const totalPages = useSelector(state => state.filters.totalPages);
    const dispatch = useDispatch();

    const handlePageClick = (event) => {
        const selectedPage = event.selected + 1; 
        console.log(`User requested page number ${selectedPage}`);
        dispatch(setPage(selectedPage));

        window.scrollTo({
            top: 0,
            behavior: 'smooth'  
        });
    };

    return(
        <div className='Pagination'>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={(e) => handlePageClick(e)}
                pageRangeDisplayed={5}
                pageCount={totalPages} 
                previousLabel="< previous"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default Pagination;