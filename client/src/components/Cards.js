import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 500px;
    height:300px;
    background: grey;
    border: 3px solid dodgerblue;
    text-align:center;
    margin: 20px;
    line-height: 10vh;
`
const Cards = props => {
    const person = props.person;
    return(
        <CardContainer data-testid='card-render'>
            <h1>Name: {person.name}</h1>
            <h5>ID: {person.id}</h5>
            <h2>Country of Origin: {person.country}</h2>
            <h4>Has had {person.searches} searches last year</h4>
        </CardContainer>
    )
};

export default Cards;