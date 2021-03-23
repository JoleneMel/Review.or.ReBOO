import React from 'react';
import Stars from './stars';


export default class Rating extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: Stars.value,
            totalVotes: 0,
            sumVotes: 0,
            averageRating: 0,
        }
        this.countClicks = this.countClicks.bind(this);
    }

//No need to overcomplicate with movie ids 
    countClicks(value) {
        this.state.totalAllVotes += 1;

        this.setState(() => {
            this.state.totalVotes += 1;
            this.state.sumVotes += value;
            this.state.averageRating = this.state.sumVotes / this.state.totalVotes;
            return this.state;
        });

    }
    render() {

        return (
            <div className="stars.line">
                <div>
                    <h2 className="averageRating">Average Rating {this.state.averageRating}</h2>
                    <h4 className="totalRatings">{this.state.totalVotes} Total Reviews</h4>
                    <Stars
                        name="1 Star"
                        value={1}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="2 Stars"
                        value={2}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="3 stars"
                        value={3}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="4 stars"
                        value={4}
                        onClick={this.countClicks}
                    />
                    <Stars
                        name="5 stars"
                        value={5}
                        onClick={this.countClicks}
                    />
                </div>
            </div>
        );
    }
}
