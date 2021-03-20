import React from 'react';
import MovieList from './movieList';

export default class WebLayout extends React.Component {
    render() {
        let movies = [
            {
                image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcShhQmWrd7gqouln_mhRDdoLy8MkIOwZj1cNx7xhUU2I4cB0IEJ',
                Title: 'My Neighbor Totoro',
                Date: 'May 7, 1993(USA)',
                Genre: 'Family/Fantasy',
                Synopsis: 'In 1958 Japan, university professor Tatsuo Kusakabe and his two daughters, Satsuki and Mei, move into an old house to be closer to the hospital where the girls mother, Yasuko, is recovering from a long-term illness.'
            },
            
            {
                image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkJkLAy7UvTvgdP7FbkLORo4A7yuVX64NJ-Yj-RFbF5e96APP7',
                Title: 'Finding Nemo',
                Date: 'May 30, 2003',
                Genre: 'Family/Adventure',
                Synopsis: 'When a son go missing its up to his father and his pal Dory to find him again'
            },

            {
                image: 'https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_.jpg',
                Title: 'Sonic The Hedgehog',
                Date: 'Febuary 14, 2020',
                Genre: 'Family/Comedy',
                Synopsis: 'blue blur'
            },
        ];
        return ( 
                <div className="container">

                    <MovieList {...{movies: movies, Title: 'All Dogs Go To Heaven', Date: 'November 17, 1989', Genre: 'Family/Musical', Synopsis: 'placeholder'}} />
                    </div>
            );
        }
    }
