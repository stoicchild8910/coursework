import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default ({
    navigation,
    route : {
        params: {
            idTv,
            id,
            key,
            poster,
            title,
            votes,
            backgroundImage,
            overview,
        }
    }
}) => {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState({
        id,
        title,
        backgroundImage,
        poster,
        overview,
        votes
    });

    const getData = async() =>{
        const [getResults, getResultsError] = await movieApi.movie(id);
        if( isTv ){
            const [getResults, getResultsError] = await tvApi.show(id);
        } else {
            const [getResults, getResultsError] = await movieApi.movie(id);
        }
        setResults({
            ...getResults,
            id,
            title,
            backgroundImage,
            poster,
            overview,
            votes
        });
        setLoading(false);
    };

    useEffect(() => {
        getData();
      }, [id]);
    React.useLayoutEffect(() => {
        navigation.setOptions({ title });
    });

    return(<DetailPresenter movies={results} loading={loading}/>);
};