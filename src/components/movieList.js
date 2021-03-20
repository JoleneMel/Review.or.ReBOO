import React from 'react';
import Movie from './movie';


export default class MovieList extends React.Component {
    constructor(props) {
        super(props);

        this.globalState = this.props.globalState;
    }

render() {
let movies;
//basically saying is there any comments within our state prop
if(this.globalState.movies) {
    //we will modifiy this code, this is going to take both the comment and the index of the posistion of that comment in that array 
    //it makes the comment key the index and uses the spread method to make sure its the current comment
    movies = this.globalState.movies.map((movie, index) => <Movie key={index} {...movie} />);
}

return (
    <div >
        {movies}
    </div>
);
}
}
