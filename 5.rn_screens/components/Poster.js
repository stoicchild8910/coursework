import React from "react";
import PropTypes from "prop-types";
import styled from  "styled-components/native";

const Image = styled.Image`
    width: 80px;
    height: 100px;
    border-radius: 4px;
`;

const Poster = ({ url }) => (
    <Image source={{ uri:url }} />
);

Poster.propTypes = {
    url: PropTypes.string.isRequired
}

export default Poster;