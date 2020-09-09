import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { tvApi } from "../../api"

import TvPresenter from "./TvPresenter";

const Wrapper = styled.View``;

export default() => {
    const [tvs, setTvs] = useState({
        loading : true,
        thisWeek: [],
        topRated: [],
        popular: [],
        thisWeekError: null,
        topRatedError: null,
        popularError: null
    });

    const getData = async() => {
        const[thisWeek, thisWeekError] = await tvApi.thisWeek();
        const[topRated, topRatedError] = await tvApi.topRated();
        const[popular, popularError] = await tvApi.popular();
        setTvs({
            loading : false,
            thisWeek,
            topRated,
            popular,
            thisWeekError,
            topRatedError,
            popularError
        });
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <Wrapper>
            <TvPresenter {...tvs}/>
        </Wrapper>
    );
}