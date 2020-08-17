import React from 'react';

const Button = (props) => {
    const onButtonClick = (event) => {
        props.onClick(event);
    };

    return (
        <div onClick={(event) => onButtonClick(event)} className={props.className}>
            {props.buttonText}
        </div>
    )
};

export default Button;