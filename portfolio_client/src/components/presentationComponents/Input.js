import React from 'react';

const Input = (props) => {

    if (props.type === "textarea") {
        return (
            <div className={props.className}>
                <label>{props.labelText}</label>
                <textarea onChange={(event) => props.onChange(event)} value={props.value} name={props.name} placeholder={props.placeholder} type={props.type} />
            </div>
        );
    } else {
        return (
            <div className={props.className}>
                <label>{props.labelText}</label>
                <input onChange={(event) => props.onChange(event)} value={props.value} name={props.name} placeholder={props.placeholder} type={props.type} />
            </div>
        );
    }
};


export default Input;