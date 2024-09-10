import './Preloader.scss';
import preloader from '../../assets/img/preloader.gif'

function Preloader(){
    return(
        <div className='Preloader'>
            <img src={preloader} alt="preloader" />
        </div>
    )
}

export default Preloader;