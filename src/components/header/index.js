import IconsHeader from '../../components/iconsHeader';
import Logo from '../../components/logo';
import OptionsHeader from '../../components/optionsHeader';
import './style.css';

function Header() {
    return (
        <header className='App-header'>
            <Logo/>
            <OptionsHeader/>
            <IconsHeader/>
        </header>
    )
}

export default Header;