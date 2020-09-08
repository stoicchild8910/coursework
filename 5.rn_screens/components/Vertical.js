import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { apiImage } from "../api";

import Poster from "./Poster";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";

const Container = styled.View``;

const Title = styled.Text`
    color: white;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Vertical = ({ key, poster, title, votes }) => {
    // console.log(key);
    return(
        <TouchableOpacity>
            <Container>
                <Poster url={apiImage(poster)} />
                <Title>{ title.length>10? `${title.slice(0,10)}..` : title }</Title>
                <Votes votes={votes} />
            </Container>
        </TouchableOpacity>
    );
};
Vertical.propTypes = {
    key: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
};
export default Vertical;