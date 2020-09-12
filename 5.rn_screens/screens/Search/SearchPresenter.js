import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import Input from "../../components/Search/Input";
import HorizontalSlider from "../../components/HorizontalSlider";
import Contents from "../../components/Contents";
import { apiImage } from "../../api";
import Horizontal from "../../components/Horizontal"
import ScrollContianer from "../../components/ScrollContainer";

const Container = styled.View``;

export default ({ movies, tvs, onChange, onSubmit, keyword }) => (
    <ScrollContianer 
    loading={false}
    contentContainerstyle={{ 
        paddingTop: 10
     }} 
     refreshFn={onSubmit}
     >
        <Input 
            placeholder={"Google your movie"}
            value={keyword}
            onChange={onChange}
            onSubmit={onSubmit}
        />
        {movies.length !== 0 && (
            <HorizontalSlider 
                title={" Movie Results "} 
                children={movies.map(cur => <Contents 
                    id={cur.id}
                    key={cur.id}
                    poster={cur.poster_path}
                    title={cur.original_title}
                    votes={cur.vote_average}
                    backgroundImage={cur.backdrop_path}
                    overview={cur.overview}
                />)}
            />
        )}

        {tvs.length !==0 && (
            <HorizontalSlider 
                title={" TV Results "} 
                children={tvs.map(cur => <Contents 
                    id={cur.id}
                    key={cur.id}
                    poster={cur.backdrop_path}
                    title={cur.name}
                    votes={cur.vote_average}
                    backgroundImage={cur.backdrop_path}
                    overview={cur.overview}
                />)}
            />
        
        )}
    </ScrollContianer>
);