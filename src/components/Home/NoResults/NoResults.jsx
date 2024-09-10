import './NoResults.scss';
import noInfo from '../../../assets/img/no_info.png';

function NoResults(){
    return(
        <div className='NoResults'>
            <h2>Yoy, it seems that there is no information for this page</h2>
            <img src={noInfo} alt="no-info" />
        </div>
    )
}

export default NoResults;