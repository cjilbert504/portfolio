import React from 'react';

const BlogPost = (props) => {
    return (
        <div>
            <div>
                <h1>{props.title}</h1>
            </div>
            <p>
                {props.content}
            </p>
        </div>
    );
};

export default BlogPost;