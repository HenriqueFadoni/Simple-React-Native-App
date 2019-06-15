import {
    NAME_PLACE,
    ADD_PLACE, 
    DELETE_PLACE, 
    SELECT_PLACE, 
    DESELECT_PLACE 
} from './actionTypes';

export const namePlace = name => {
    return {
        type: NAME_PLACE,
        placeName: name
    }
}

export const addPlace = placeName => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    };
};

export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    };
};

export const selectPlace = key => {
    return {
        type: SELECT_PLACE,
        placeKey: key
    };
};

export const deselectPlace = () => {
    return {
        type: DESELECT_PLACE
    };
};