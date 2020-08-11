import React from 'react';

const TextArea = (props) => {
    return (
        <div className={props.className}>
            <label>{props.labelText}</label>
            <textarea placeholder={props.placeholder}></textarea>
        </div>
    );
};

export default TextArea;