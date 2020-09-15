import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { apiImage } from "../api";

import Poster from "./Poster";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import trimText from "../utils";

const Container = styled.View`
    margin: 0px 2px;
`;

const Title = styled.Text`
    color: white;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Contents = ({ isTv=false, id, key, poster, title, votes, backgroundImage, overview }) => {
    const navigation = useNavigation();
    const goToDetail = () => 
        navigation.navigate("Detail",{
            isTv,
            id,
            key,
            poster,
            title,
            votes,
            backgroundImage,
            overview,
        });
        // console.log(title);
    return(
        <TouchableOpacity onPress={goToDetail}>
            <Container>
                <Poster url={apiImage(poster, "")} />
                {/* <Title>{ trimText(title, 5) }</Title> */}
                <Title>{ title.length>5? `${title.slice(0,5)}..` : title }</Title>
                <Votes votes={votes} />
            </Container>
        </TouchableOpacity>
    );
};

Contents.propTypes = {
    id: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired
};

export default Contents;