import React from 'react';
import ContentSegment from '../ContentSegment';
import railsAPI from '../../apis/railsAPI';

class Blog extends React.Component {
    componentDidMount() {
        this.onPageRender();
    };

    onPageRender = async () => {
        const response = await railsAPI.get("/blog_posts")
        console.log(response)
    }

    render() {
        return (
            <ContentSegment />
        )
    }
};

export default Blog;