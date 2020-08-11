import React from 'react';

const Button = (props) => {
    return (
        <div className={props.className}>
            {props.buttonText}
        </div>
    )
};

export default Button;