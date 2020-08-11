import React from 'react';

const Input = (props) => {
    return (
        <div className={props.className}>
            <label>{props.labelText}</label>
            <input placeholder={props.placeholder} type="text" />
        </div>
    );
};

export default Input;