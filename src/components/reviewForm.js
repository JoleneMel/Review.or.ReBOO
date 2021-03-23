import React from 'react';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            reviewInfo: '',
        }

        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    resetForm() {
        this.setState({
            title: '',
            reviewInfo: '',
        });
    }

    submitForm() {
        this.props.onSubmit(this.state);
        this.resetForm();
    }

    handleInputChange(event) {
            const target = event.target;
            const name = target.name;
            const value = target.value;
            this.setState({
                [name]: value
            });
        }

    render() {
        return (
            <div>
                <div>
                <h2>Tell us more?</h2>
                    <label htmlFor="titleInput"><b>Review Title:</b></label><br />
                    <input name="title" type="text" id="titleInput" value={this.state.title} onChange={this.handleInputChange} /><br />
                    <label htmlFor="reviewInput"><b>Review:</b></label><br />
                    <input name="reviewInfo" type="text" id="reviewInput" value={this.state.reviewInfo} onChange={this.handleInputChange} /><br />
                    <button className="btn btn-primary" onClick={this.submitForm}>Add New Review</button>
                </div>
            </div>
        );
    }
}

