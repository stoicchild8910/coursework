import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";

const Container = styled.Text`
    color: white;
    opacity: 0.5;
    margin-bottom:15px;
`;

const Popularity = ({popularity}) => {
    return(
        <TouchableOpacity>
            <Container> 
                ♥ {Math.floor(popularity)}
            </Container>
        </TouchableOpacity>
    );
    
};

Popularity.propType = {
    popularity: PropTypes.number.isRequired,
}; 

export default Popularity;