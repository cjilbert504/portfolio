import React from 'react';
import { Field, reduxForm } from 'redux-form';

import ContentSegment from '../compositionComponents/ContentSegment';
import Input from '../compositionComponents/Input';
import Button from '../compositionComponents/Button';

class BlogsNew extends React.Component {
    renderField(field) {
        return (
            <Input className={field.className} labelText={field.label} type={field.type} {...field.input} />
        )
    };

    render() {
        return (
            <ContentSegment>
                <form>
                    <div className="ui inverted form">
                        <div className="one field">
                            <Field name="title" label="Title" className="field" type="text" component={this.renderField} />
                        </div>
                            <Field name="content" label="Content" className="field" type="textarea" component={this.renderField} />
                        <Button className="ui submit button" buttonText="Save this blog post!" />
                    </div>
                </form>                                      
            </ContentSegment>
        )
    };
};

export default reduxForm({
    form: "BlogsNewForm"
})(BlogsNew);

