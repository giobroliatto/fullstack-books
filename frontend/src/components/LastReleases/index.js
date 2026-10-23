import { books } from './lastReleasesData';
import { Title } from '../Title'
import RecommendationCard from '../RecommendationCard';
import recommendationBook from '../../assets/book2.png'
import styled from 'styled-components';

const LastRleeasesContainer = styled.section`
    background-color: #222527;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    background-color: #222527;
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastReleases() {
    return (
        <LastRleeasesContainer>

            <Title colorProps='#F8CDFF' backgroundColorProps='#181A1B'>LAST RELEASES</Title>
            <NewBooksContainer>
                {books.map(book => (
                    <img src={book.src} alt='book-cover'/>
                ))}
            </NewBooksContainer>

            <RecommendationCard
                title='Maybe you get interested'
                subtitle='Angular 11'
                description='Building an application in google platform'
                img={recommendationBook}
            />

        </LastRleeasesContainer>
    )
}

export default LastReleases;