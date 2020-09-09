//List.js in course

import React from "react";
import styled from "styled-components/native";

import Contents from "./Contents";
import Bartitle from "./BarTitle";
import Horizontal from "./Horizontal";

const Container = styled.View``;

const Vertical = ({title, children}) => (
    <>
    <Bartitle title={title} />
    <Container>
        {children}
    </Container>
    </>
);

// Vertical.propTypes = {

// };

export default Vertical;