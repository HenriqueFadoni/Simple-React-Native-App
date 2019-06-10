import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import ListItem from './ListItem/ListItem';

const list = props => {
    const placesOutPut = props.places.map((place, i) => (
        <ListItem 
            key={i} 
            placeName={place} 
            onItemPressed={() => props.onItemDeleted(i)}
        />
    ));
    return (
        <ScrollView style={styles.listContainer}>
            {placesOutPut}
        </ScrollView>
    );
}

export default list;

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
})