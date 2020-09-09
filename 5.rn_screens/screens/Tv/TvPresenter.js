import React from "react";
import styled from "styled-components/native";

import ScrollContianer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Poster from "../../components/Poster";
import Contents from "../../components/Contents";
import Vertical from "../../components/Vertical";
import { formatDate, trimText } from "../../utils";
import Horizontal from "../../components/Horizontal";

const Title = styled.Text`
    color: white;
`;
const Date = styled.Text`
    color: white;
    opacity: 0.5;
`;
const Country = styled.Text`
    color: white;
    opacity: 0.5;
`;
const Container = styled.View`
`;
const Text = styled.Text`
    color: white;
    opacity: 0.5;
`;
const Overview = styled.Text`
    color: white;
    opacity: 0.5;
`;
const TopRatedContainer = styled.View``;

export default ({ loading, popular, topRated }) => {
    console.log("this is tv presenter page");
    return(
        <ScrollContianer loading={loading}>
            <>
            {/* Popular Tv Show: Horizontal */}
            <HorizontalSlider 
                title={"Popular TV Shows"}
                children={
                    popular.map(cur => (
                        <Container>
                            <Contents 
                                key = {cur.id}
                                poster = {cur.poster_path}
                                title = {cur.original_name}
                                votes = {cur.vote_average}
                            />
                            <Country>{cur.origin_country}</Country>
                            <Text>First Aired: </Text>
                            <Date>{formatDate(cur.first_air_date)}</Date>
                        </Container>
                    ))
                }
            />
            {/* TopRated tv shows : vertical */}
            <TopRatedContainer>
                <Vertical
                    title={"Top Rated TV Shows"}
                    children = {
                        topRated.map(cur => (
                            <Horizontal 
                                key={cur.id}
                                id={cur.id}
                                poster={cur.poster_path}
                                title={cur.original_name}
                                votes={cur.vote_average}
                                popularity={cur.popularity}
                                video={cur.video}
                                date={cur.release_date}
                                overview={cur.overview}
                            />
                        ))
                    }
                />
            </TopRatedContainer>
            </>
        </ScrollContianer>
    );
};