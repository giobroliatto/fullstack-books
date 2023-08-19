import styled from 'styled-components';

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
`

const Options = styled.ul`
    display: flex;
`

const textOptions = ['CATEGORIES', 'FAVORITES', 'MY SHELF'];

function OptionsHeader() {
    return (

        <Options>
            { textOptions.map(text => (
            <Option><p>{text}</p></Option>
            )) }
        </Options>
        
    )
}

export default OptionsHeader;