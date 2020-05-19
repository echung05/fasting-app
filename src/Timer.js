
// <button onClick={this.startTimer}>start</button>
import Card from 'react-bootstrap/Card';
const React = require('react')
class TimerInput extends React.Component {
    render() {
      return (
        <div style={{marginLeft:100}}>
          <h3>Input your desired time</h3>
          <input type="number" value={this.props.value} onChange={this.props.handleChange} required />
        </div>
      );
    }
  }
  
  class Time extends React.Component {
    render() {
      return (
        <div>
          <h1 style={{ fontSize: 100, marginLeft:100 }}>{this.props.value}:{this.props.seconds}</h1>
        </div>
      );
    }
  }
  
  class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        seconds: '00',
        value: '',
        isClicked : false
      }
      //this.secondsRemaining;
      //this.intervalHandle;
      this.handleChange = this.handleChange.bind(this);
      this.startCountDown = this.startCountDown.bind(this);
      this.tick = this.tick.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        value: event.target.value
      })
    }
  
    tick() {
      var min = Math.floor(this.secondsRemaining / 60);
      var sec = this.secondsRemaining - (min * 60);
  
      this.setState({
        value: min,
        seconds: sec,
      })
  
      if (sec < 10) {
        this.setState({
          seconds: "0" + this.state.seconds,
        })
  
      }
  
      if (min < 10) {
        this.setState({
          value: "0" + min,
        })
  
      }
  
      if (min === 0 & sec === 0) {
        clearInterval(this.intervalHandle);
      }
  
  
      this.secondsRemaining--
    }
  
    startCountDown() {
      this.intervalHandle = setInterval(this.tick, 1000);
      let time = this.state.value;
      this.secondsRemaining = time * 60;
      this.setState({
        isClicked : true
      })
    }
  
    render() {
      const clicked = this.state.isClicked;
      if(clicked){
      return (
              <Time value={this.state.value} seconds={this.state.seconds} />
      );
      }else{
        return (
              <Card bg="secondary" style={{ width: '80rem', height: '50vh'}}>
  <Card.Body>
    <Card.Title style={{ fontSize: '100px'}}>Intermittent Fasting Timer</Card.Title>
        <p class="text-info" style={{ fontSize: '24px'}}>Pick a fasting time below and watch the clock coundown the time until your next meal.</p>
        <Time value={this.state.value} seconds={this.state.seconds} />
        <button className="btn btn-lg btn-success" onClick={this.props.startCountDown}>16:8</button>
        <button className="btn btn-lg btn-success" style={{ marginLeft: '25px'}} onClick={this.props.startCountDown}>18:6</button>
        <button className="btn btn-lg btn-success" style={{ marginLeft: '25px'}} onClick={this.props.startCountDown}>Custom</button>
            <button className="btn btn-lg btn-success" style={{ marginLeft: '75px'}} onClick={this.props.startCountDown}>Start</button>
  </Card.Body>
</Card>
               
        );
      }
    }
  }
  /*
<TimerInput value={this.state.value} handleChange={this.handleChange} />
*/
 
export default Timer;