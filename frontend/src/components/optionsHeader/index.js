import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Option = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    cursor: pointer;
    height: 100%;
    padding: 0 5px;
    color: #E8E6E3;
`

const Options = styled.ul`
    display: flex;
`

const textOptions = ['CATEGORIES', 'FAVORITES', 'MY SHELF'];

function OptionsHeader() {
    return (

        <Options>
            { textOptions.map(text => (
                <Link to={`/${text.toLowerCase()}`}>
                    <Option><p>{text}</p></Option>
                </Link>
            )) }
        </Options>
        
    )
}

export default OptionsHeader;