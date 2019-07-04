import React, { Component }  from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/List/List';

class FindPlaceScreen extends Component {
    itemSelectedHandler = key => {
        const selPlace = this.props.places.find(place => place.key === key);
        this.props.navigator.push({
            screen: "awesome-places.PlaceDetailScreen",
            title: selPlace.name,
            passProps: {
                selectedPlace: selPlace
            }
        });
    }

    render () {
        return (
            <View>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
            </View>
        );
    };
};

mapStateToProps = state => {
    return {
        places: state.places.placeArr
    };
};

export default connect(mapStateToProps)(FindPlaceScreen);