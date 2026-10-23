import IconsHeader from '../IconsHeader';
import Logo from '../Logo';
import OptionsHeader from '../OptionsHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
    background-color: #181A1B;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
            <OptionsHeader/>
            <IconsHeader/>
        </HeaderContainer>
    )
}

export default Header;