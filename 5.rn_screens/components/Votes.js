import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.Text`
    color: white;
    opacity: 0.5;
    font-weight: 500;
    font-size: 12px;
`;

const Votes = ({ votes }) => <Container>★ {votes} /10</Container>

Votes.propTypes = {
    votes : PropTypes.number.isRequired,
};

export default Votes;