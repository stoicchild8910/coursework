import React from "react";
import PropTypes from "prop-types";
import { ScrollView, ActivityIndicator, Text } from "react-native";

const ScrollContianer = ({loading, children}) => (
    <ScrollView
        style={{ backgroundColor: "black" }}
        contentContainerStyle={{ 
            flex: loading? 1: 0,
            justifyContent: loading? "center": "flex-start"
         }}
    >
        {loading ? <ActivityIndicator color="white" size="small" /> : (
            children
        )}
    </ScrollView>
);

ScrollContianer.PropTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
};

export default ScrollContianer;
