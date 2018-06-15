import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from './components/Cards';
import players from "./players.json";
import './App.css';



class App extends Component {
  state = {
    players: players
  }

  shuffle = () => {
    const newArr = this.state.players.sort(function () { return 0.5 - Math.random() });
    this.setState({
      players: newArr
    })
    return newArr
  }
  
  handleRenderPlayers = () => {
    return this.state.players.map((player) =>
      <Cards
        image={player.image}
        name={player.name}
        key={player.id}
        onClick={this.shuffle}
      />
    );
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div>
                {this.handleRenderPlayers()}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;