import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import InputForm from './components/InputForm/InputForm';
import List from './components/List/List';

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
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <InputForm
          value={this.state.placeName}
          changeTextHandler={this.placeNameChangedHandler}
          submit={this.placeSubmitHandler}
        />
        <List places={this.state.places} />
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
