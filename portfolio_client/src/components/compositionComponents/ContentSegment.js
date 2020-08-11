import React from 'react';

const ContentSegment = (props) => {
    return (
        <div className="ui container" style={{ opacity: "0.875"}}>
            <div className="ui very padded blue inverted raised segment" style={{ boxShadow: "5px 5px 10px #888888", marginBottom: "100px" }}>
                {props.children}
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    );
};

export default ContentSegment;