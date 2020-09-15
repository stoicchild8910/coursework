import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { ScrollView, ActivityIndicator, RefreshControl, Text } from "react-native";

const ScrollContianer = ({ loading, children, contentContainerStyle, refreshFn }) => {
    const [refreshing, setRefreshing] = useState(false);
    
    const onRefresh = async() => {
        setRefreshing(true);
        await refreshFn();
        setRefreshing(false);
    }

    return(
    <ScrollView
        style={{ backgroundColor: "black" }}
        contentContainerStyle={{ 
            flex: loading? 1: 0,
            justifyContent: loading? "center": "flex-start",
            ...contentContainerStyle
         }}
         refreshControl = {
            <RefreshControl 
                refreshing={refreshing} 
                onRefresh={onRefresh}
            />
        }
    >
        {loading ? <ActivityIndicator color="white" size="small" /> : (
            children
        )}
    </ScrollView>
    );
};

ScrollContianer.PropTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    contentContainerStyle: PropTypes.object,
    refreshFn: PropTypes.func
};

export default ScrollContianer;
