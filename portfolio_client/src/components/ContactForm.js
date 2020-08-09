import React from 'react';
import ContentSegment from './ContentSegment';

const ContactForm = () => {
    return (
        <ContentSegment>
            <div className="ui blue inverted segment">
                <div className="ui inverted form">
                    <div className="two fields">
                        <div className="required field">
                            <label>First Name</label>
                            <input placeholder="First Name" type="text" />
                        </div>
                        <div className="required field">
                            <label>Last Name</label>
                            <input placeholder="Last Name" type="text" />
                        </div>
                    </div>
                    <div className="required field">
                            <label>Message</label>
                            <textarea placeholder="Message"></textarea>
                        </div>
                    <div className="ui submit button">Submit</div>
                </div>
            </div>
        </ContentSegment>
    )
};



export default ContactForm;