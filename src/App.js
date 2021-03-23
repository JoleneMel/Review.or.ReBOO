import './App.css';
import NavBar from './components/navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import MovieList from './components/movieList';


const globalState = {
  movies: [
    {

      id: 0,
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcShhQmWrd7gqouln_mhRDdoLy8MkIOwZj1cNx7xhUU2I4cB0IEJ',
      Title: 'My Neighbor Totoro',
      Date: 'May 7, 1993(USA)',
      Genre: 'Family/Fantasy',
      Synopsis: 'In 1958 Japan, university professor Tatsuo Kusakabe and his two daughters, Satsuki and Mei, move into an old house to be closer to the hospital where the girls mother, Yasuko, is recovering from a long-term illness.',
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,

      votes: {
        onestar: 0,
        twostars: 0,
        threestars: 0,
        fourstars: 0,
        fivestars: 0,
      },
      reviews: [],
    },

    {
      id: 1,
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkJkLAy7UvTvgdP7FbkLORo4A7yuVX64NJ-Yj-RFbF5e96APP7',
      Title: 'Finding Nemo',
      Date: 'May 30, 2003',
      Genre: 'Family/Adventure',
      Synopsis: 'Marlin a clown fish is over protective over Nemo who has a foreshortened fin. When Nemo tries to prove himself he is caught by a diver. Its up to Dory and Merlin to save him', 
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,

      votes: {
        onestar: 0,
        twostars: 0,
        threestars: 0,
        fourstars: 0,
        fivestars: 0,
      },
      reviews: [],
    },

    {
      id: 2,
      image: 'https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_.jpg',
      Title: 'Sonic The Hedgehog',
      Date: 'Febuary 14, 2020',
      Genre: 'Family/Comedy',
      Synopsis: 'Sonic video game Icon now stars in his new movie! He cannot interact with anyone though, making him lonely until he bumps into a cop who aids him on his journey on getting his rings back.',
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,

      votes: {
        onestar: 0,
        twostars: 0,
        threestars: 0,
        fourstars: 0,
        fivestars: 0,
      },
      reviews: [],
    },

      {      
        id: 3,
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSycy8vRa9ende-qVYJhgQwAEp9maxX1hO_p8sqIULmIXFEgYPf',
        Title: 'All Dogs Go To Heaven',
        Date: 'November 17, 1989',
        Genre: 'Family/Musical',
        Synopsis: 'An under rated flim staring the late Judith Eva Barsi playing an orphan who goes on a journey with Charlie(the dog that cheated death) and Itchy to find a family.',
        totalVotes: 0,
        sumVotes: 0,
        averageRating: 0,
  
        votes: {
          onestar: 0,
          twostars: 0,
          threestars: 0,
          fourstars: 0,
          fivestars: 0,
      },
      reviews: [],
    },
  ],
  totalAllVotes: 0,
};


function App() {


  return (

    <div className="App">
      <body id="color">
      <NavBar />,
      <MovieList globalState={globalState}/>,

      </body>
    </div>

  );
}

export default App;
