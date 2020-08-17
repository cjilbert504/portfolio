import React from 'react';

import ContentSegment from '../compositionComponents/ContentSegment';
import Input from '../compositionComponents/Input';
import Button from '../compositionComponents/Button';

class BlogsNew extends React.Component {
    state = {
        title: "",
        content: ""
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        console.log(this.state);
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
                            <Input name="title" value={this.state.title} className="field" type="text" labelText="Title" onChange={(event) => this.onInputChange(event)} />
                        </div>
                            <Input name="content" value={this.state.content} className="field" type="textarea" labelText="Content" onChange={(event) => this.onInputChange(event)} />
                        <div onClick={(event) => this.onFormSubmit(event)}>
                            <Button className="ui submit button" buttonText="Publish" />
                        </div>
                    </div>
                </form>                                      
            </ContentSegment>
        )
    };
};

export default BlogsNew;

