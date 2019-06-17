import {
    ADD_PLACE,
    DELETE_PLACE,
    SELECT_PLACE,
    DESELECT_PLACE,
    NAME_PLACE
} from '../actions/actionTypes';

const initialState = {
    placeName: '',
    placeArr: [],
    selectedPlace: null
};

const namePlace = (state, action) => {
    return {
        ...state,
        placeName: action.placeName
    }
}

const addPlace = (state, action) => {
    return {
        ...state,
        placeArr: state.placeArr.concat({
            key: Math.random().toString(),
            name: action.placeName,
            image: {
                uri: "https://cdn.thecrazytourist.com/wp-content/uploads/2017/09/ccimage-shutterstock_566911099.jpg"
            }
        })
    };
};

const deletePlace = state => {
    return {
        ...state,
        placeArr: state.placeArr.filter(place => {
            return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
    };
};

const selectPlace = (state, action) => {
    return {
        ...state,
        selectedPlace: state.placeArr.find(place => {
            return place.key === action.placeKey;
        })
    };
};

const deselectPlace = state => {
    return {
        ...state,
        selectedPlace: null
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NAME_PLACE:
            return namePlace(state, action);
        case ADD_PLACE:
            return addPlace(state, action);
        case DELETE_PLACE:
            return deletePlace(state);
        case SELECT_PLACE:
            return selectPlace(state, action);
        case DESELECT_PLACE:
            return deselectPlace(state);
        default:
            return state;
    };
};

export default reducer;