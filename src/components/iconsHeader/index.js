import profile from '../../assets/profile.svg';
import bag from '../../assets/bag.svg';
import './style.css';

const icons = [profile, bag];

function IconsHeader() {
    return (
        
        <ul className='icons'>
          { icons.map(icon => (
            <li className='icon'><img src={icon}></img></li>
          )) }
        </ul>

    )
}

export default IconsHeader;