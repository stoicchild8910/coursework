import React, { useEffect, useState } from "react";
// import { View, Text, Button } from "react-native";
import { movieApi } from "../../api";
import MoviesPresenter from "./MoviesPresenter"
import styled from "styled-components/native";

const Wrapper = styled.View`
  background-color: black;
`;

export default () => {
  // console.log("this is movie container page")
  const [movies, setMovies] = useState({
    nowPlaying: [],
    popular: [],
    upcoming: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
    loading: true
  });

  const getData = async () => {
    //fetch까지는 성공 근데 왜 setMoives가 안되지?
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    
    setMovies({
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError,
      loading: false
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return(
    <Wrapper>
      <MoviesPresenter {...movies} />
    </Wrapper>
  );
};