import React from 'react';
import ContentSegment from '../compositionComponents/ContentSegment';
import railsAPI from '../../apis/railsAPI';
import BlogPost from '../presentationComponents/BlogPost';

class BlogListContainer extends React.Component {
    state = {
        blogPosts: []
    };

    componentDidMount() {
        this.onPageRender();
    };

    onPageRender = async () => {
        const response = await railsAPI.get("/blog_posts")
        this.setState({ blogPosts: response.data })
    };

    renderBlogPosts = () => {
        return this.state.blogPosts.map(blog => (
            <div key={blog.id}>
                <ContentSegment>
                    <BlogPost title={blog.title} content={blog.content} />
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

export default BlogListContainer;