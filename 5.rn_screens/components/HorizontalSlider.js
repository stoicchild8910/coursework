import React from "react";
import PropTypes from "prop-types";

import BarTitle from "./BarTitle";
import { ScrollView, RefreshControl, View } from "react-native";

const HorizontalSlider =  ({ title, children }) => (
    <View>
    <BarTitle title={title} />
    <ScrollView 
        style={{ marginTop: 20 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    >   
    {children} 
    </ScrollView>
    </View>
);

HorizontalSlider.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default HorizontalSlider;