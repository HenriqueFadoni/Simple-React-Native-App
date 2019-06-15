import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import InputForm from './src/components/InputForm/InputForm';
import List from './src/components/List/List';
import Detail from './src/components/Detail/Detail';
import {
  namePlace,
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from './src/store/actions/index';

type Props = {};
class App extends Component<Props> {
  placeNameChangedHandler = val => this.props.onNameChange(val);

  placeSubmitHandler = () => {
    if (this.props.placeName.trim() === "") {
      return;
    }
    this.props.onAddPlace(this.props.placeName)
  }

  placeDeletedHandler = () => this.props.onDeletePlace();

  placeCloseHandler = () => this.props.onDeselectPlace();

  placeSelectedHandler = key => this.props.onSelectPlace(key);

  render() {
    return (
      <View style={styles.container}>
        <Detail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.placeCloseHandler}
        />
        <InputForm
          value={this.props.placeName}
          changeTextHandler={this.placeNameChangedHandler}
          submit={this.placeSubmitHandler}
        />
        <List
          places={this.props.places}
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

const mapStateToProps = state => {
  return {
    placeName: state.places.placeName,
    places: state.places.placeArr,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNameChange: name => dispatch(namePlace(name)),
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);