import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { tvApi } from "../api";

export default () => {
  const [tvs, setTvs] = useState({
    thisWeek: [],
    topRated: [],
    popular: [],
    thisWeekError: null,
    topRatedError: null,
    popularError: null
  });

  const getData = async() => {
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();

    setTvs({
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
    // console.log("hello");
  }, [])

  return(
    <View style={{ flex:1, backgroundColor: "black" }}>
      <Text style={{ color: "white" }}>{tvs.topRated.length}</Text>
    </View>
  );
};