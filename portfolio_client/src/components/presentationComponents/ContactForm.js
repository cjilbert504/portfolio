import React from 'react';
import ContentSegment from '../compositionComponents/ContentSegment';
import Input from '../compositionComponents/Input';
import TextArea from '../compositionComponents/TextArea';
import Button from '../compositionComponents/Button';

const ContactForm = () => {
    return (
        <ContentSegment>
            <div className="ui inverted form">
                <div className="two fields">
                    <Input className="required field" labelText="Full Name" placeholder="Full Name"  />
                    <Input className="required field" labelText="Email" placeholder="Email" />
                </div>
                <TextArea className="required field" labelText="Message" placeholder="Message" />
                <Button className="ui submit button" buttonText="Submit" />
            </div>
        </ContentSegment>
    )
};



export default ContactForm;