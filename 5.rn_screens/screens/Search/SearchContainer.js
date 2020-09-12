import React, { useState } from "react";
import styled from "styled-components/native";
import SearchPresenter from "./SearchPresenter";
import { Text } from "react-native";
import { movieApi, tvApi } from "../../api";

export default () => {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState({
        loading: true,
        movies:[],
        tvs:[],
        moviesError: null,
        tvsError: null
    });

    // text를 입력하면 계속해서 keyword 변수의 state를 업데이트 해줌
    const onChange = (text) => setKeyword(text)
    
    
    const search = async() =>  {
        if(keyword=="") return;
        const [ movies, moviesError ] = await movieApi.search(keyword);
        const [ tvs, tvsError ] = await tvApi.search(keyword);

        
        setResults({
            loading: false,
            movies,
            tvs,
            moviesError,
            tvsError
        });
        // console.log(tvs);
    };

    return(
        <SearchPresenter 
            //this means contents of the results
            {... results}
            onChange={onChange}
            onSubmit={search}
            keyword={keyword}
        />
    );
};