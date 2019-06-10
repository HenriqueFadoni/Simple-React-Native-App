import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import InputForm from './components/InputForm/InputForm';
import List from './components/List/List';
import placeImage from './src/assets/beautiful-place.jpg'

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: '',
    places: []
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
            uri: "https://cdn.muenchen-p.de/.imaging/stk/responsive/galleryLarge/dms/sw/mde/frauenkirche-4000/document/frauenkirche-4000.jpg"
          }
        })
      }
    });
  }

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <InputForm
          value={this.state.placeName}
          changeTextHandler={this.placeNameChangedHandler}
          submit={this.placeSubmitHandler}
        />
        <List
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler} 
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
