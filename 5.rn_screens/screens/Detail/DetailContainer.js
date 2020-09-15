import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default ({
    navigation,
    route : {
        params: {
            isTv,
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
    const [detail, setDetail] = useState({
        loading:true,
        results: {
            id,
            title,
            backgroundImage,
            poster,
            overview,
            votes: 99
        }
        
    });

    const getData = async() =>{
            const [getDetail, getDetailError] = isTv? await tvApi.show(id) : await movieApi.movie(id);
            console.log(detail);
            setDetail({
                loading: false,
                results: {
                    ...getDetail,
                    id: getDetail.id,
                    title: getDetail.title || getDetail.name,
                    backgroundImage: getDetail.backdrop_path,
                    poster: getDetail.poster_path,
                    overview: getDetail.overview,
                    votes: 15
                }
            });
        console.log(detail);
    };

    useEffect(() => {
        getData();
    }, [id]);
    React.useLayoutEffect(() => {
        navigation.setOptions({ title });
    });

    return(<DetailPresenter {...detail}/>);
};