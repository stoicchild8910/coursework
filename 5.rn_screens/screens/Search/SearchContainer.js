import React from "react";
import styled from "styled-components/native";
import SearchPresenter from "./SearchPresenter";
import { Text } from "react-native";

const Container = styled.View`
    /* background-color: #000; */
`;

export default () => (
    <Container>
        <SearchPresenter />
    </Container>
);