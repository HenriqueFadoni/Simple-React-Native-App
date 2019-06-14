import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import InputForm from './components/InputForm/InputForm';
import List from './components/List/List';
import Detail from './components/Detail/Detail';

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: '',
    places: [],
    selectedPlace: null
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: this.state.placeName,
          image: {
            uri: "https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_566911099.jpg"
          }
        })
      }
    });
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    });
  }

  placeCloseHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Detail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.placeCloseHandler}
        />
        <InputForm
          value={this.state.placeName}
          changeTextHandler={this.placeNameChangedHandler}
          submit={this.placeSubmitHandler}
        />
        <List
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});
