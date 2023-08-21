import Input from "../input";
import styled from 'styled-components';
import { useState } from "react";
import { books } from "./searchData";

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #32113b 35%, #6d5a70);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
        border-radius: 20px;
    }
`

function Search() {
    const [searchedBooks, setSearchedBooks] = useState([]);

    return (
        <SearchContainer>
            <Title>Know where to start?</Title>
            <Subtitle>Find your book in our shelf</Subtitle>
            <Input 
                placeholder="Search your book..."
                onBlur={event => {
                    const typedText = event.target.value;
                    const searchResult = books.filter(book => book.name.includes(typedText))
                    
                    setSearchedBooks(searchResult);
                }}
            />
            { searchedBooks.map(book => (
                <Result>
                    <p>{book.name}</p>
                    <img src={book.src} alt='book-cover'/>
                </Result>
            )) }
        </SearchContainer>
    )
}

export default Search;