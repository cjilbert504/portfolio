import React from 'react';
import { connect } from 'react-redux';

import ContentSegment from '../presentationComponents/ContentSegment';
import Input from '../presentationComponents/Input';
import Button from '../presentationComponents/Button';
import { addBlog } from '../../actions';

class BlogsNew extends React.Component {
    state = {
        title: "",
        content: ""
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.addBlog(this.state, () => {
            this.props.history.push("/blogs");
        });
        

        this.setState({
            title: "",
            content: ""
        })
    };

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <ContentSegment>
                <form>
                    <div className="ui inverted form">
                        <div className="one field">
                            <Input name="title" value={this.state.title} className="field" type="text" labelText="Title" onChange={this.onInputChange} />
                        </div>
                            <Input name="content" value={this.state.content} className="field" type="textarea" labelText="Content" onChange={this.onInputChange} />
                        <div>
                            <Button className="ui submit button" buttonText="Publish" onClick={this.onFormSubmit} />
                        </div>
                    </div>
                </form>                                      
            </ContentSegment>
        )
    };
};

export default connect(null, { addBlog })(BlogsNew);

 