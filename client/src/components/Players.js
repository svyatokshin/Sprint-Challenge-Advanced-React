import React from 'react';
import Cards from './Cards';
import styled from 'styled-components';

const CardList = styled.div`
    display:flex;
    max-width:100%;
    flex-flow: column;
    align-items: center;
    text-align: center;

`

const Players = props => {

    return (
        <CardList>
            {props.players.map(person => (
                <Cards
                    key= {person.id}
                    name = {person.name}
                    id = {person.id}
                    country = {person.country}
                    searches = {person.searches}
                />
            ))}
        </CardList>
    );
;}

export default Players;