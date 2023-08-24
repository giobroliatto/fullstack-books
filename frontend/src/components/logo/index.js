import logo from '../../assets/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    color: #E8E6E3;
    font-size: 30px;
`

const LogoImg = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImg 
                src={logo} 
                alt='logo'
            />
            <p><strong>FullStack</strong> Books</p>
        </LogoContainer>
    )
}

export default Logo;