import React from 'react';
import railsAPI from '../../apis/railsAPI';
import ContactForm from '../presentationComponents/ContactForm';

class Contact extends React.Component {
    onFormSubmit = (formData) => {
        railsAPI.post('/contacts', {
            full_name: formData.name,
            email: formData.email,
            message: formData.message
        })
    };

    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Feel Free To Reach Out!</h1>
                <ContactForm onSubmit={this.onFormSubmit} />
            </div>
        )
    }
};

export default Contact;