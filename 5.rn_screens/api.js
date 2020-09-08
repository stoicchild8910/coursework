import axios from "axios";
import { func } from "prop-types";
// import { Tmdb } from "tmdb";

const TMDB_KEY = "0d5f97f4ad3ef0c07ab854f29dd0b7ea";

// url에 request를 보내 JSON을 받아옴
const makeRequest = (path, params) => 
    axios.get(`https://api.themoviedb.org/3${path}`,{
        params: {
            ...params,
            api_key: TMDB_KEY
        }
    });

//원하는 url의 results를 가져온다.
const getAnything = async(path, params) => {
    try {
        const {
            data: {results},
            data
        } = await makeRequest(path, params);
        return [results || data, null];
    } catch(e) {
        return [null, e];
    }
}

export const movieApi = {
    nowPlaying : () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything("/movie/upcoming", { region : "kr" }),
    search: (query) => getAnything("/search/movie",{ query }),
    movie: (id) => getAnything(`/movie/${id}`),
    discover: () => getAnything("/discover/movie"),
    credits: (id) => getAnything(`/movie/${id}/credits`),
    similar: (id) => getAnything(`/movie/${id}/similar`),
    video: (id) => getAnything(`/movie/${id}/videos`)
}

export const tvApi = {
    today: () => getAnything("/tv/airing_today"),
    thisWeek: () => getAnything("/tv/on_the_air"),
    topRated: () => getAnything("/tv/top_rated"),
    popular: () => getAnything("tv/popular"),
    search: (query) => getAnything("/search/tv", { query }),
    show: (id) => getAnything(`/tv/${id}`)
}

export const apiImage = path => `https://image.tmdb.org/t/p/w500${path}`;