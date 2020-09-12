import React, { useEffect, useState } from "react";
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { movieApi } from "../api";
import ScrollContianer from "../components/ScrollContainer";


export default () => {
  const [favs, setFavs] = useState({
    favs:[],
    favsError:null
  });

  const getData = async() => {
    const [favs, favsError] = await movieApi.discover();
    setFavs({
      favs, 
      favsError
    });
  };

  useEffect(() => {
    getData();
  }, [])

  return(
    <ScrollContianer>
      <Text>
        Hello this is favs page
      </Text>
    </ScrollContianer>
  );
};