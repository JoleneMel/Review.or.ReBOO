import React from 'react';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(`You clicked the entry for ${this.props.username} ${this.props.starRating} (${this.props.id})`);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>Username: {this.props.username}</p>
                <p>Stars: {this.props.starRating}</p>
                <p>Title: {this.props.title}</p>
                <p>reviewInput: {this.props.reviewinput}</p>
                <p>viewOrBoo: {this.props.viewOrBoo}</p>
                <input type="radio" value="Review" name="viewOrBoo" /> ReVIEW!
                <input type="radio" value="Meh" name="viewOrBoo" /> Meh!
                <input type="radio" value="ReBOO" name="viewOrBoo" /> ReBOO! 
                
            </div>
        );
    }   
}
