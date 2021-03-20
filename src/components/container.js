import React from 'react';
import Stars from './star';

// NEED TO DO VALUE FOR AVERAGE STAR RATING

export default class Container extends React.Component {
    //since we are handling the atate within here the parent component we have to build the state up in the constructor to reflect that 
    constructor(props) {
        super(props);
        this.state = {
            //within here we will have counts which will hold the counts, we will pass in the names assoicated to those names 
            votes: {},
            clicksSum: 0,
            voteSum: 0,
            voteAvg: 0,
            //*** VIDEO EVENTS PT 3 FOR REFERENCE  */
            //to create the feature the business wants we will start by adding more properties to keep track of it 
            //to start lets go by adding the prop "highestCount: 0" ofc starting at 0 because they will all start at 0
            highestVote: 0,
            //then we add this which will allow us to compare the name of the buttons with the highest count so it can be updated when needed 
            highestVoteName: ''
        };
        this.countClicks = this.countClicks.bind(this);
    }


    //We are going to create this countClick method here 
    //This method takes the name and this is going ot be the method that increments the state up there and keep all the names synced across so 
    countClicks(name, value) {
        this.props.globalState.totalVotes += 1;
        //this is so whenever we click on them we will get the name 
        this.setState(state => {
         state.clicksSum += 1;
         state.voteSum += value;
         //(average = sum of all votes / total number of clicks)
        state.voteAvg = state.voteSum / state.clicksSum;
            //rememebering that objects have key valued pairs we want to find the one that has the name for that particular button only
            state.votes[name]
                //now using a ternary operator (?) we will check to see if that name already exists 
                //so we will increment by 1 
                ? state.votes[name] += 1
                //this is for if it does not already exist, this part will be the first click of that button so we will then set it = to 1 
                : state.votes[name] = 1;
            //*video event 3 we need to then modify this accordingly to check if the new highest needs to be displayed 
            //this will reflect just after the count as been updated 
            if (state.votes[name] > state.highestVote) {
                //where we set everything 
                state.highestVote = state.votes[name];
                //then we want to update the name 
                state.highestVoteName = name;
            }
            //then we just need to return the state 
            return state;
        });

    }
    render() {
        //and then return 3 counter buttons, in the five star idea this can be expanded to 5 counters 
        //shift+alt+f to fix formatting 

        return (
            <div className="container">
                <div id="stars.line">
                    <h2>just for fun{this.props.globalState.totalVotes}</h2>
                    <h2 id="averageRating">Average Rating {this.state.voteAvg}</h2>
                    <h2>this is the sum of all votes {this.state.voteSum}</h2>
                    <h2 id="totalRatings">total number of clicks {this.state.clicksSum}</h2>
                    <Stars
                        name="1 Star"
                        vote={this.state.votes.onestar}
                        value= {1}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="2 Stars"
                        vote={this.state.votes.twostar}
                        value= {2}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="3 stars"
                        vote={this.state.votes.threestar}
                        value={3}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="4 stars"
                        vote={this.state.votes.fourstar}
                        value={4}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="5 stars"
                        vote={this.state.votes.fivestar}
                        value={5}
                        onClick={this.countClicks}
                    />
                </div>
            </div>
        );
    }
}
