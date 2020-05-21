import React from 'react';
import './App.css';
import NavB from './Navbar'
import Timer from './Timer'
import History from './History'



class App extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state = ({
      fasts: [
       
      ]
    });

  }

  handleHistory = (past) => {
    console.log(past);
    this.setState((prevState) => {
      return { fasts: [...prevState.fasts, past] } // making new array
    });
    console.log(this.state.props);
  }

render(){
  return (
    <div className="App">
      <header className="App-header">
        <NavB/>
        <Timer handleHistory={this.handleHistory}/>
        <History fasts={this.state.fasts}/>
      </header>
    </div>
  );
}
}

export default App;
