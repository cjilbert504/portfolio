import React from 'react';

const ContentSegment = (props) => {
    return (
        <div className="ui container" style={{ marginTop: "100px" }}>
            <div className="ui very padded blue inverted raised segment" style={{ boxShadow: "5px 5px 10px #888888" }}>
                {props.children}
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    );
};

export default ContentSegment;