import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions, ActivityIndicator, View, ScrollView } from "react-native";
import Slide from "../../components/Movies/Slide";
import BarTitle from "../../components/BarTitle";
import Contents from "../../components/Contents";
import { movieApi } from "../../api";
import Horizontal from "../../components/Horizontal"; 
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider"
import Vertical from "../../components/Vertical";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
    width: 100%;
    height: ${HEIGHT/3}px;
`;

const Container = styled.View`

`;

const BigSlideContainer = styled.View`
    width: 100%;
    height:${HEIGHT/2}px;
    margin-bottom: 50px;
`;

const UpcomingContainer = styled.View`
`;

export default ({ loading, nowPlaying, popular, upcoming }) => {
    return (
        <ScrollContainer loading={loading} >
            <>
            <SliderContainer>
                <Swiper controlsEnabled={false} loop timeout={3} >
                    {nowPlaying.map(cur => (
                        <Slide 
                            key={cur.id}
                            id={cur.id}
                            title={cur.original_title}
                            overview={cur.overview}
                            votes={cur.vote_average}
                            backgroundImage={cur.backdrop_path}
                            poster={cur.poster_path}
                        />
                    ))}
                </Swiper>
            </SliderContainer>
            <Container>
                <HorizontalSlider 
                    title={"Popular Moives"}
                    children={
                        popular.map(cur=>(
                            <Contents 
                                key={cur.id}
                                id={cur.id}
                                poster={cur.poster_path}
                                title={cur.original_title}
                                votes={cur.vote_average}
                            />
                        ))
                    } />
                <UpcomingContainer>
                    <Vertical 
                        title={"Coming Soon"}
                        children={
                            upcoming.map(cur=>(
                                <Horizontal 
                                    key={cur.id}
                                    id={cur.id}
                                    poster={cur.poster_path}
                                    title={cur.original_title}
                                    votes={cur.vote_average}
                                    popularity={cur.popularity}
                                    video={cur.video}
                                    date={cur.release_date}
                                    overview={cur.overview}
                                />
                            ))
                        }
                    />
                </UpcomingContainer>
            </Container>
            </>
        </ScrollContainer>
    );
};
