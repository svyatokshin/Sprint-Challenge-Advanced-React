import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/NavBar';
import Players from "./components/Players";
import '../src/styles/styles.css'

class App extends React.Component {
    state = {
      players: []
    };

  componentDidMount(){
    axios
    .get("http://localhost:5000/api/players")
    .then(response => {
      console.log("this is the response: ", response.data)
      this.setState({
        players: response.data
      });
    })
    .catch(error => console.log("We are getting this error :", error))
  }
  
  
  
  
  render() {
    return (
    <div className="App">
      <Navbar />
      <Players players={this.state.players}/>
    </div>
    );
  }
  
}

export default App;
