import React from 'react';
import ContentSegment from '../compositionComponents/ContentSegment';
import Input from '../compositionComponents/Input';
import Button from '../compositionComponents/Button';

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
                            <Input className="field" onChange={(event) => this.onInputChange(event)} labelText="Full Name" type="text" name="name" value={this.state.name} />
                            <Input className="field" onChange={(event) => this.onInputChange(event)} labelText="Email" type="text" name="email" value={this.state.email} />
                        </div>
                            <Input className="field" onChange={(event) => this.onInputChange(event)} labelText="Message" type="textarea" name="message" value={this.state.message} />
                        {/* <div onClick={this.onFormSubmit} className="ui submit button">Submit</div> */}
                        <Button className="ui submit button" buttonText="Submit" onClick={(event) => this.onFormSubmit(event)} />
                    </div>
                </form>
            </ContentSegment>
        )
    }
};



export default ContactForm;