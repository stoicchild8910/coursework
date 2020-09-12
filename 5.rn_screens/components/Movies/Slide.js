import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

import { apiImage } from "../../api";
import { trimText } from "../../utils";
import { Dimensions, Image, Text } from "react-native";

import Poster from "../Poster";
import Votes from "../Votes";

import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Data = styled.View`
  width: 50%;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

const Overview = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: white;
  opacity: 0.7;
`;

const Slide = ({ id, key, title, backgroundImage, votes, overview, poster }) => {
  const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail",{
            id,
            key,
            poster,
            title,
            votes,
            backgroundImage,
            overview,
        });
    };
  return(
    <Container>
        <BG 
        resizeMode="stretch"
        source={{ uri: apiImage(backgroundImage) }} 
        />
        <Content>
          <Poster url={apiImage(poster)} />
          <Data>
              <Title>{title.length>20? `${title.slice(0, 20)}...`: title}</Title>
              <Votes votes={votes} />
              <Overview>{overview.length>80? overview.slice(0, 80)+"....":overview}</Overview>
              {/* <Button title="See datails" /> */}
              <TouchableOpacity onPress={goToDetail}>
                <Button>
                  <ButtonText>View details</ButtonText>
                </Button>
              </TouchableOpacity>
          </Data>
        </Content>
    </Container>
  );
};


Slide.propTypes = {
    id: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
};

export default Slide;