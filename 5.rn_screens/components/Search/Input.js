import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const Container = styled.View`
    flex-direction:row;
`;

const TextInput = styled.TextInput`
    background-color: white;
    border: 1px solid gray;
    margin: 10px auto;
    padding: 15px 10px;
    border-radius: 15px;
    width: 80%;
`;

const Button = styled.Button``;

const Input = ({ value, placeholder, onChange, onSubmit }) => {
    const handleClick = () => {
        // console.log("amazing MJ!")
    };

    return(
        <Container>
            <TextInput
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                onSubmitEditing={onSubmit}
                returnKeyType={"search"}
            />
            {/* <Button 
                title="google"
                onPress={onSubmit}
            /> */}
        </Container>
    );
    
};

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Input;