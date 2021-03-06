import React, { Component } from 'react';
import {
    View,
    Button,
    StyleSheet,
    Dimensions
} from 'react-native';
import MapView from "react-native-maps";

class PickLocation extends Component {
    state = {
        focusedLocation: {
            latitude: 37.7900352,
            longitude: -122.4013726,
            latitudeDelta: 0.0122,
            longitudeDelta:
                Dimensions.get("window").width /
                Dimensions.get("window").height * 0.0122
        },
        locationChosen: false
    }

    //Handling Different Inputs on MapView
    pickLocationHandler = event => {
        const coords = event.nativeEvent.coordinate;

        //Creating Map Animation 
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude
        });

        //Saving New Location Input
        this.setState(prevState => {
            return {
                focusedLocation: {
                    ...prevState.focusedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationChosen: true
            };
        });

        //Passing Location to SharePlaces
        this.props.onLocationPick({
            latitude: coords.latitude,
            longitude: coords.longitude
        });
    }

    //Fetching User Location
    getLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(
            response => {
                const coordsEvent = {
                    nativeEvent: {
                        coordinate: {
                            latitude: response.coords.latitude,
                            longitude: response.coords.longitude
                        }
                    }
                };

                this.pickLocationHandler(coordsEvent);
            },
            error => {
                console.log(error);
                alert("Fetching the user position failed. Please, select one manually.");
            }
        );
    }

    render() {
        let marker = null;

        //Tracking the New Location Chosen
        if (this.state.locationChosen) {
            marker = <MapView.Marker coordinate={this.state.focusedLocation} />
        }

        return (
            <View style={styles.container}>
                <MapView
                    initialRegion={this.state.focusedLocation}
                    style={styles.map}
                    onPress={this.pickLocationHandler}
                    ref={ref => this.map = ref}
                >
                    {marker}
                </MapView>
                <View style={styles.button}>
                    <Button
                        title="Locate Me"
                        onPress={this.getLocationHandler}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    map: {
        width: "100%",
        height: 250
    },
    button: {
        margin: 8
    }
});

export default PickLocation;