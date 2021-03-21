import React from 'react';
import ReviewForm from './reviewForm';


export default class Movie extends React.Component {
    constructor(props) {
        super(props);
            this.state = { reviews: [] };
            this.handleClick = this.handleClick.bind(this);
            this.globalState = this.props.globalState;
        }
        handleClick() {
            console.log(`You clicked the entry for ${this.props.Title} ${this.props.Date} (${this.props.Genre})`);
        }
        onFormSubmit(formState) {
            const reviews = this.state.reviews.slice();
            reviews.push(JSON.stringify(formState));
            this.setState({
                reviews
            })
          }
        render() {
            // console.log(this.state.reviews);
            return(
                <div id="movieCard">
                <h2 id="movieTitle"> {this.props.Title}</h2>
                {/* need to style */}
                <h2 className="averageRating">Average Rating {this.globalState.movies[this.props.id].averageRating}</h2>
                <h2 className="totalRatings">total number of clicks {this.globalState.movies[this.props.id].totalVotes}</h2>
                <img id="movieImage" src={this.props.image} alt={`${this.props.title}'s picture`}  className="movieimage" height = "400px"/> 
                <p id="movieSynopsis">Synopsis: {this.props.Synopsis}</p>
               <ul>
                    <li id="movieGenre"> Genre: {this.props.Genre} </li> 
                    <li id="movieDate"> Date: {this.props.Date} </li>
                </ul>
                <div>{ this.state.reviews }</div>
                <ReviewForm onSubmit={ (formState) => this.onFormSubmit(formState) }/>
                </div>

            );
        }
 }

//  <Container />
//  <h2 id="averageRatingTitle">Average Rating {this.state.voteAvg}</h2>