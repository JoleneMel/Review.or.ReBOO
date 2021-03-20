import React from 'react';
import Container from './container';


export default class Movie extends React.Component {
    constructor(props) {
        super(props);
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            console.log(`You clicked the entry for ${this.props.Title} ${this.props.Date} (${this.props.Genre})`);
        }
        render() {
            return(
                <div id="movieCard">
                <h2 id="movieTitle"> {this.props.Title}</h2> 
                <img id="movieImage" src={this.props.image} alt={`${this.props.title}'s picture`}  className="movieimage" height = "400px"/> 
                <p id="movieSynopsis">Synopsis: {this.props.Synopsis}</p>
               <ul>
                    <li id="movieGenre"> Genre: {this.props.Genre} </li> 
                    <li id="movieDate"> Date: {this.props.Date} </li>
                </ul>
                </div>

            );
        }
 }

//  <Container />
//  <h2 id="averageRatingTitle">Average Rating {this.state.voteAvg}</h2>