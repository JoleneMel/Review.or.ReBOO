import React from 'react';
import Stars from './star';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            //need to return the buttons on the review 
            //need to know this
            // Stars: '',
            title: '',
            reviewInfo: '',
            reviewReBoo: '',
            movieId: 0,
        }

        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        //that now allows us to bind handleClick to the this and we can now us it 
    }
    //so this is where it is defined, ABOVE is where it is bind this and use it by name 


    resetForm() {
        this.setState({
            Username: '',
            //need to return the buttons on the review 
            // Stars: '',
            title: '',
            reviewInfo: '',
            reviewReBoo: '',
        });
    }

    submitForm() {
        // note -- consider moving state up to the parent and 
        // simply having this component take `props` for its form elements.
        // if you were to do that, you would have the parent component
        // house the fully-fledged 'input change' and 'submit form' handlers, passed
        // down to this component
        this.props.onSubmit(this.state);
        this.resetForm();
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: target.name,
            [value]: target.value
        });
    }

    render() {
        return (
            <div>
                <h2>Add Review</h2>
                <div><br />
                    <Stars
                        name="1 Star"
                        vote={this.state.onestar}
                        value={1}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="2 Stars"
                        vote={this.state.twostars}
                        value={2}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="3 stars"
                        vote={this.state.threestars}
                        value={3}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="4 stars"
                        vote={this.state.fourstars}
                        value={4}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="5 stars"
                        vote={this.state.fivestars}
                        value={5}
                        onClick={this.countClicks}
                    /> <br /><br />
                    <label htmlFor="UsernameInput">Username:</label>
                    <input name="Username" type="text" id="UsernameInput" value={this.state.username} onChange={this.handleInputChange} /><br />
                    <label htmlFor="titleInput">Review Title:</label>
                    <input name="title" type="text" id="titleInput" value={this.state.title} onChange={this.handleInputChange} /><br />
                    {/*need to figure out how to import star buttons 1-5 }
                    {/* <label htmlFor="lastNameInput">Last name:</label> */}
                    {/* <input name="lastName" type="text" id="lastNameInput" value={this.state.lastName} onChange={this.handleInputChange} /> */}

                    {/*need to change to */}
                    <label htmlFor="reviewInput">Review:</label>
                    <input name="reviewInfo" type="text" id="reviewInput" value={this.state.reviewInfo} onChange={this.handleInputChange} />
                    {/* this is for the review, reboo, or meh part done through radio buttons to go with the theme of the site */}
                    <div className="radio">
                    <label htmlFor="viewOrBooInput">Is this movie a reVIEW, Meh, or reBOO? </label> <br />
                    <label> 
                        <input
                        type="radio"
                        value="ReVIEW"
                        checked={this.state.viewOrBoo === "ReVIEW"}
                        onChange={this.handleInputChange}
                        /> 
                        ReVIEW!
                    </label>
                    </div>
                    <div className="radio">
                    <label> <br />
                        <input
                        type="radio"
                        value="Meh"
                        checked={this.state.viewOrBoo === "Meh"}
                        onChange={this.handleInputChange}
                        />
                        Meh!
                    </label>
                    </div>
                    <div className="radio">
                    <label> <br />
                        <input
                        type="radio"
                        value="ReBOO"
                        checked={this.state.viewOrBoo === "ReBOO"}
                        onChange={this.handleInputChange}
                        />
                        ReBOO!
                    </label>
                    </div>
                    <div>
                    Selected option is : {this.state.viewOrBoo}
                    </div>
                    {/* <button className="btn btn-default" type="submit">
                    Submit
                    </button> */}
                    <button className="btn btn-primary" onClick={this.submitForm}>Add New Review</button>
                </div>
            </div>
        );
    }
}

