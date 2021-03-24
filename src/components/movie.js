import React, { useState } from 'react';
import Rating from './rating';
import ReviewForm from './reviewForm';


export default class Movie extends React.Component {
    constructor(props) {
        super(props);
            this.state = { reviews: new Array() };
            this.handleClick = this.handleClick.bind(this);
            this.globalState = this.props.globalState;
        }
        handleClick() {
            console.log(`You clicked the entry for ${this.props.Title} ${this.props.Date} (${this.props.Genre})`);
        }
        onFormSubmit(formState) {
            const reviews = this.state.reviews.slice();
            reviews.push(formState); 
            this.setState ({
                reviews
            })
        }
        render() {
            // console.log(this.state.reviews);
            return(
                <div id="movieCard">
                <h2 id="movieTitle"> {this.props.Title}</h2>
                <img id="movieImage" src={this.props.image} alt={`${this.props.title}'s picture`}  className="movieimage" height = "400px"/> 
                <p id="movieSynopsis">Synopsis:<br/> {this.props.Synopsis}</p>
               <ul>
                    <li id="movieGenre"> Genre: {this.props.Genre} </li> 
                    <li id="movieDate"> Date: {this.props.Date} </li>
                </ul>
                <Rating />
                {this.state.reviews.map(function(review, index){
                    return <div key={index}>{review.title} {review.reviewInfo}</div>;
                })}
                <ReviewForm onSubmit={ (formState) => this.onFormSubmit(formState) }/>
                </div>

            );
        }
 }

//  <Container />
//  <h2 id="averageRatingTitle">Average Rating {this.state.voteAvg}</h2>