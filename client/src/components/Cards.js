import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 500px;
    height:300px;
    background: grey;
    border: 3px solid dodgerblue;
    text-align:center;
    margin: 20px;
`
const Cards = props => {
    return(
        <CardContainer data-testid='card-render'>
            <h1>Name: {props.name}</h1>
            <h5>ID: {props.id}</h5>
            <h2>Country of Origin: {props.country}</h2>
            <h4>Has had {props.searches} searches last year</h4>
        </CardContainer>
    )
};

export default Cards;