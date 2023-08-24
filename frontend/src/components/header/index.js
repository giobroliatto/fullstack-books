import IconsHeader from '../../components/iconsHeader';
import Logo from '../../components/logo';
import OptionsHeader from '../../components/optionsHeader';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: #181A1B;
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