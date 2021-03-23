import React from 'react';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(`You clicked the entry for (${this.props.id})`);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>Title: {this.props.title}</p>
                <p>reviewInput: {this.props.reviewinput}</p>
            </div>
        );
    }   
}
