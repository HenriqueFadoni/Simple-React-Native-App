import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ListItem from './ListItem/ListItem';

const list = props => {
    const placesOutPut = props.places.map((place, i) => (
        <ListItem 
            key={i} 
            placeName={place} 
        />
    ));
    return (
        <View style={styles.listContainer}>
            {placesOutPut}
        </View>
    );
}

export default list;

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
})