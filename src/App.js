import './App.css';
import NavBar from './components/navbar'
import Container from './components/container';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import MovieList from './components/movieList';
import WebLayout from './components/web.layout';
import React from 'react';
let globalState = {
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
      // TODO: Apply to other films
      votes: {
        onestar: 0,
        twostars: 0,
        threestars: 0,
        fourstars: 0,
        fivestars: 0,
      }
    },

    {
      id: 1,
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkJkLAy7UvTvgdP7FbkLORo4A7yuVX64NJ-Yj-RFbF5e96APP7',
      Title: 'Finding Nemo',
      Date: 'May 30, 2003',
      Genre: 'Family/Adventure',
      Synopsis: 'When a son go missing its up to his father and his pal Dory to find him again',
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,
    },

    {
      id: 2,
      image: 'https://m.media-amazon.com/images/M/MV5BMDk5Yzc4NzMtODUwOS00NTdhLTg2MjEtZTkzZjc0ZWE2MzAwXkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_.jpg',
      Title: 'Sonic The Hedgehog',
      Date: 'Febuary 14, 2020',
      Genre: 'Family/Comedy',
      Synopsis: 'blue blur',
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,
    },
  ],
  totalAllVotes: 0,
};


function App() {
  return (

    <div className="App">
      {/* <header className="App-header">"Review or ReBOO!!!"</header> */}
      <body id="color">
        <NavBar />,
      <WebLayout />,
      <Container globalState={globalState} />,

      </body>
    </div>

  );
}

export default App;
