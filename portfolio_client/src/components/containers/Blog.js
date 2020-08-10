import React from 'react';
import ContentSegment from '../ContentSegment';
import railsAPI from '../../apis/railsAPI';

class Blog extends React.Component {
    state = {
        blogPosts: []
    };

    componentDidMount() {
        this.onPageRender();
    };

    onPageRender = async () => {
        const response = await railsAPI.get("/blog_posts")
        console.log(response.data);
        this.setState({ blogPosts: response.data })
        // console.log(this.state.blogPosts);
    };

    renderBlogPosts = () => {
        return this.state.blogPosts.map(blog => (
            <div key={blog.id}>
                <ContentSegment>
                    <div>
                        <h1>{blog.title}</h1>
                    </div>
                    <div>
                        {blog.content}
                    </div>
                </ContentSegment>
            </div>
        ))
    };

    render() {
        return (
            <div> 
                {this.renderBlogPosts()}
            </div>
        )
    }
};

export default Blog;