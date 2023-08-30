import styled from 'styled-components';
import { Title } from '../Title';

const Card = styled.div`
    align-items: center;
    background-color: #F8CDFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 500px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Button = styled.button`
    background-color: #6E2682;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`

const Description = styled.p`
    max-width: 300px;
`

const Subtitle = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const BookImg = styled.img`
    width: 150px;
    border-radius: 10px;
`

function RecommendationCard({title, subtitle, description, img}) {
    return (
        <Card>
            <div>
                <Title
                    colorProps='#6E2682'
                    backgroundColorProps='#F8CDFF'
                    fontSizeProps='24px'
                    textAlignProps='left'
                >
                    {title}
                </Title>
                <Subtitle>{subtitle}</Subtitle>
                <Description>{description}</Description>
            </div>
            <div>
                <BookImg src={img}/>
                <Button>Learn more</Button>
            </div>
        </Card>
    )
}

export default RecommendationCard;