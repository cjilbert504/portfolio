import React from 'react';
import ContentSegment from '../presentationComponents/ContentSegment';
import Input from '../presentationComponents/Input';
import Button from '../presentationComponents/Button';

class ContactForm extends React.Component {
    state = {
        name: "",
        email: "",
        message: ""
    };

    onInputChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        })
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state);
        this.setState({
            name: "",
            email: "",
            message: ""
        })
    }

    render() {
        return (
            <ContentSegment>
                <form onSubmit={this.onFormSubmit}>
                    <div className="ui inverted form">
                        <div className="two fields">
                            <Input className="field" onChange={this.onInputChange} labelText="Full Name" type="text" name="name" value={this.state.name} />
                            <Input className="field" onChange={this.onInputChange} labelText="Email" type="text" name="email" value={this.state.email} />
                        </div>
                            <Input className="field" onChange={this.onInputChange} labelText="Message" type="textarea" name="message" value={this.state.message} />
                            <Button className="ui submit button" buttonText="Submit" onClick={this.onFormSubmit} />
                    </div>
                </form>
            </ContentSegment>
        )
    }
};



export default ContactForm;