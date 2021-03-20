import React from 'react';
import Movie from './movie';
import Poster from './poster.jpg'

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: props.movies,
            Title: props.Title,
            Poster: props.image,
            Genre: props.Genre,
            Date: props.Date,
            Synopsis: props.Synopsis

        };
    }

render() {
let movies;
//basically saying is there any comments within our state prop
if(this.state.movies) {
    //we will modifiy this code, this is going to take both the comment and the index of the posistion of that comment in that array 
    //it makes the comment key the index and uses the spread method to make sure its the current comment
    //make state = globalState
    movies = this.state.movies.map((movie, index) => <Movie key={index} {...movie} />);
}

return (
//To pass in the image into here to properly render
    <div >
        <div >
        <div id="movieCard">
                <h2 id="movieTitle"> {this.state.Title}</h2>
                <img id="movieImage" src= {Poster} alt={`${this.state.title}'s picture`}  className="movieimage" height = "400px"/>
                <p id="movieSynopsis">Synopsis: {this.state.Synopsis}</p>
                <ul>
                    <li id="movieGenre"> Genre: {this.state.Genre} </li>
                    <li id="movieDate"> Date: {this.state.Date} </li>
                </ul>
                
                </div>
                {movies}
        </div>
    </div>
);
}
}