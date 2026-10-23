import styled from 'styled-components';

export const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: ${props => props.backgroundColorProps || '#000'};
    color: ${props => props.colorProps || '#000'};
    font-size: ${props => props.fontSizeProps || '36px'};
    text-align: ${props => props.textAlignProps || 'center'};
    margin: 0;
`