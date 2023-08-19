import IconsHeader from '../../components/iconsHeader';
import Logo from '../../components/logo';
import OptionsHeader from '../../components/optionsHeader';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OptionsHeader/>
            <IconsHeader/>
        </HeaderContainer>
    )
}

export default Header;