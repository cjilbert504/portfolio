import React from 'react';
import { connect } from 'react-redux';

import { fetchBlogs } from '../../actions';
import ContentSegment from '../compositionComponents/ContentSegment';
import BlogPost from '../presentationComponents/BlogPost';

class BlogListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBlogs();
    };

    renderBlogPosts = () => {
        return this.props.blogs.map(blog => {
            return (
                <div key={blog.id}>
                    <ContentSegment>
                        <BlogPost title={blog.title} content={blog.content} />
                    </ContentSegment>
                </div>
            )
        });
    };

    render() {
        return (
            <div> 
                {this.renderBlogPosts()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { blogs: state.blogs }
}

export default connect(mapStateToProps, { fetchBlogs })(BlogListContainer);