import React from 'react';
import ContentSegment from '../compositionComponents/ContentSegment';
// import Input from '../compositionComponents/Input';
// import TextArea from '../compositionComponents/TextArea';
// import Button from '../compositionComponents/Button';

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
    }

    render() {
        return (
            <ContentSegment>
                <form onSubmit={this.onFormSubmit}>
                    <div className="ui inverted form">
                        <div className="two fields">
                            <div  className="field">
                                <label>Full Name</label>
                                <input onChange={this.onInputChange} value={this.state.name} type="text" name="name" />
                            </div>
                            <div  className="field">
                                <label>Email</label>
                                <input onChange={this.onInputChange} value={this.state.email} type="text" name="email" />
                            </div>
                        </div>
                        <div className="field">
                            <label>Message</label>
                            <textarea onChange={this.onInputChange} value={this.state.message} name="message" />
                        </div>
                        <div onClick={this.onFormSubmit} className="ui submit button">Submit</div>
                    </div>
                </form>
            </ContentSegment>
        )
    }
};



export default ContactForm;