import './App.css';
import NavBar from './components/navbar'
import Container from './components/container';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import MovieList from './components/movieList';
import WebLayout from './components/web.layout';
import React from 'react';
let globalState = {
  text: "Star",
  id: 30127,
  totalVotes: 0,
};







function App() {
  return (

      
    <div className="App">
      {/* <header className="App-header">"Review or ReBOO!!!"</header> */}
      <body id="color">
      <NavBar />,
      <WebLayout />,
      <Container globalState={globalState}/>,
      
      </body>
    </div>

  );
}

export default App;
