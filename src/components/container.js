import React from 'react';
import Stars from './star';

export default class Container extends React.Component {



    //since we are handling the state within here the parent component we have to build the state up in the constructor to reflect that 
    constructor(props) {
        super(props);

        this.globalState = this.props.globalState;
        this.movieIndex = 0;
        this.movie = this.globalState.movies[this.movieIndex];
        this.countClicks = this.countClicks.bind(this);
    }


    //We are going to create this countClick method here 
    //This method takes the name and this is going ot be the method that increments the state up there and keep all the names synced across so 
    //We DO NOT NEED NAME SO PLS REMOVE ****
    countClicks(value) {
        //set to globalState instead of state like a global variable, we show this array within the app.js page 
        this.globalState.totalAllVotes += 1;
        //our movies array index like any array starts with 0 
        this.movieIndex = 0;
        //takes the movie by index to organize and make it unique to the code
        this.movie = this.globalState.movies[this.movieIndex];
        //this is so whenever we click on them we will get the name of the movie 

        this.setState(() => {
            //this is to keep an accurate count of all votes, this would be then used to help creage the averageRating 
            this.globalState.movies[this.movieIndex].totalVotes += 1;
            //this is the VALUE of each button since every star has a different value and cannot be calculated correctly as 1
            this.globalState.movies[this.movieIndex].sumVotes += value;
            //(average = sum of all votes / total number of clicks)
            this.globalState.movies[this.movieIndex].averageRating = this.globalState.movies[this.movieIndex].sumVotes / this.globalState.movies[this.movieIndex].totalVotes;
            //then we just need to return the this.globalstate, needs this. to work
            return this.globalState;
        });

    }
    render() {

        return (
            <div className="container">
                <div id="stars.line">
                    <h2 className="averageRating">Average Rating {this.globalState.movies[this.movieIndex].averageRating}</h2>
                    <h2>this is the sum of all votes {this.globalState.movies[this.movieIndex].sumVotes}</h2>
                    <h2 className="totalRatings">total number of clicks {this.globalState.movies[this.movieIndex].totalVotes}</h2>
                    <Stars
                        name="1 Star"
                        vote={this.globalState.movies[this.movieIndex].votes.onestar}
                        value={1}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="2 Stars"
                        vote={this.globalState.movies[this.movieIndex].votes.twostars}
                        value={2}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="3 stars"
                        vote={this.globalState.movies[this.movieIndex].votes.threestars}
                        value={3}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="4 stars"
                        vote={this.globalState.movies[this.movieIndex].votes.fourstars}
                        value={4}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="5 stars"
                        vote={this.globalState.movies[this.movieIndex].votes.fivestars}
                        value={5}
                        onClick={this.countClicks}
                    />
                </div>
                {/* Still want to try to return the stars as a line like in the div starline has it for the review do not know if global state can help  */}
            </div>
        );
    }
}
