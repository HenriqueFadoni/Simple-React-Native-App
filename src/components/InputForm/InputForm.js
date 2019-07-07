import React from 'react';

import DefaultInput from '../UI/DefaultInput/DefaultInput';

const inputForm = props => (
    <DefaultInput
        placeholder="Place Name"
        value={props.placeName}
        onChangeText={props.onChangeText}
    />
)
export default inputForm;