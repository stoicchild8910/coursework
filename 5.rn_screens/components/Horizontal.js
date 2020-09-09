import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

import Poster from "./Poster";
import Votes from "./Votes";
import Popularity from "./Popularity";
import Video from "./Video";
import { apiImage } from "../api";
import { trimText, formatDate } from "../utils";

const Container = styled.View`
    padding: 0px 10px;
    margin-bottom: 30px;
    flex-direction: row;
    align-items: flex-start;
`;
const Data = styled.View`
    margin-left: 20px;
    padding-right: 70px;
    width: 80%;
`;

const Title = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 15px;
`;

const OverView = styled.Text`
    color: white;
`;

const Date = styled.Text`
    color: white;
    font-size: 12px;
    opacity: 0.5;
`;

const Horizontal = ({ id, 
    key, 
    poster, 
    title, 
    votes, 
    popularity, 
    video, 
    date, 
    overview}) => {
    // console.log(votes);
    return(
        <Container>
            <Poster url={apiImage(poster)} />
            <Data>
                <Title>{trimText(title, 15)}</Title>
                <Date>Release: {formatDate(date)}</Date>
                <Votes votes={votes} />
                <Popularity popularity={popularity} />
                <OverView>{overview.length>90? `${overview.slice(0,90)}...` : overview }</OverView>
                {/* <Video> */}
            </Data>
        </Container>
    );
    
};

Horizontal.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
};

export default Horizontal;