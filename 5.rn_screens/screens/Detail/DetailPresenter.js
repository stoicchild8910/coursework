import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator, Dimensions } from "react-native";

import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import { apiImage } from "../../api";
import { trimText, formatDate } from "../../utils";
import ScrollContianer from "../../components/ScrollContainer";
import Contents from "../../components/Contents";
import Horizontal from "../../components/Horizontal";

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height:  ${Dimensions.get("window").height/3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 60px;
`;

const Text = styled.Text``;

const Title = styled.Text`
    color: white;
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 10px;
`;

const OverView = styled.Text`
    color: white;
`;

const Data = styled.View`
  margin-top: 80px;
  padding: 0px 30px;
`;

const Info = styled.Text`
  width: 50%;
  margin-left: 50px;
`;

const DataName = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 10px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({ results, loading }) => {
  // console.log(results.backgroundImage);
  return(
    <ScrollContianer loading={false}>
      <>
      <Header>
        <BG source={{ uri: apiImage(results.backgroundImage, "") }} />
        <Container>
          <Poster url={apiImage(results.poster, "")} />
          <Info>
            <Title>{trimText(results.title, 15)}</Title>
            {results.votes && <Votes votes={results.votes} />}
          </Info>
        </Container>
      </Header>
      <Data>
        {results.overview && (
        <>
        <DataName>[ Synopsis ]</DataName>
        <DataValue>{results.overview}</DataValue>
        </>
        )}
        {loading && (
          <ActivityIndicator style={{ marginTop:30 }} color={"white"} />
        )}
      </Data>
      </>
    </ScrollContianer>
  );
};