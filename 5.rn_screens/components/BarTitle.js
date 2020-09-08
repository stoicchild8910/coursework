import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Text = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin-left: 15px;
    margin-bottom: 20px;
    margin-top: 20px;
`;

const BarTitle = ({ title }) => <Text>{title}</Text>;

BarTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export default BarTitle;