import React from 'react';
import { connect } from 'react-redux';

import { fetchBlogs } from '../../actions';
import ContentSegment from '../presentationComponents/ContentSegment';
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
            <div className="ui relaxed divided list"> 
                {this.renderBlogPosts()}
            </div>
        )
    }
};

const mapStateToProps = ({ blogs }) => {
    return { blogs }
}

export default connect(mapStateToProps, { fetchBlogs })(BlogListContainer);