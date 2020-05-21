
// <button onClick={this.startTimer}>start</button>
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar'

const React = require('react')
class TimerInput extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: 100 }}>
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
        <h1 style={{ fontSize: 100, marginLeft: 100 }}>{this.props.hours}:{this.props.value}:{this.props.seconds}</h1>
      </div>
    );
  }
}

class StartButton extends React.Component {
    render() {
      return (
          <button className="btn btn-lg btn-success" style={{ marginLeft: '75px' }} disabled={!this.props.value} onClick={this.props.startCountDown}>Start</button>
      );
    }
  }

class Timer extends React.Component {
  
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      seconds: '00',
      value: '00',
      hours: '00',
      start: '00',
      isClicked: false,
      isCustom: false
    }
    this.secondsRemaining = 0;
    this.intervalHandle = 0;
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
    this.eighteenSix = this.eighteenSix.bind(this);
    this.sixteenEight = this.sixteenEight.bind(this);
    this.stop = this.stop.bind(this);
    this.customTime = this.customTime.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(event) {
    this.setState({
      hours: event.target.value,
      value: '00',
      seconds: '00',
      start: event.target.value
    })
  }

  tick() {
        var hour = Math.floor((this.secondsRemaining / 60) / 60);
        var min = Math.floor((this.secondsRemaining / 60) % 60);
        var sec = this.secondsRemaining - (min * 60) - (hour * 3600);
    
        this.setState({
          hours: hour,
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
            value: "0" + this.state.value,
          })
    
        }
    
        if (hour < 10) {
            this.setState({
              hours: "0" + this.state.hours,
            })
      
          }
    
        if (min === 0 & sec === 0 & hour === 0) {
            this.props.handleHistory({expTime: this.state.start, actualTime: this.state.start, date: new Date(Date.now()).toDateString()})
          clearInterval(this.intervalHandle);
        }
    
    
        this.secondsRemaining--
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    if(!(this.state.value > 0 || this.state.seconds > 0)){
          this.secondsRemaining = ((this.state.hours * 3600) + (this.state.value * 60) + this.state.seconds)/100;
    }
    else{
        this.secondsRemaining = ((this.state.hours * 3600) + (this.state.value * 60) + this.state.seconds);
    }
    
    this.setState({
      isClicked: true,
      isCustom: false,
    })
  }

  eighteenSix() {
    this.setState({
        hours: '18',
        value: '00',
        seconds: '00',
        start: '18'
      })
  }

  sixteenEight() {
    this.setState({
        hours: '16',
        value: '00',
        seconds: '00',
        start: '16'
      })
  }

  stop(){
    this.setState({
        isClicked: false
      })
      clearInterval(this.intervalHandle);
  }

  customTime(){
    this.setState({
        isCustom: true
      })
  }

  reset(){
    this.setState({
        hours: this.state.start,
        value: '00',
        seconds: '00',
      })
      var cross = {expTime: this.state.hours, actualTime: this.state.start, date: new Date(Date.now()).toDateString()};
      this.props.handleHistory(cross)
      this.secondsRemaining = this.state.start * 60 * 60;
    clearInterval(this.intervalHandle);
    this.intervalHandle = setInterval(this.tick, 1000);
  }

  render() {
    const clicked = this.state.isClicked;
    if (clicked) {
      return (
        <Card bg="secondary" style={{ width: '80rem', height: '50vh' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '80px' }}>Intermittent Fasting Timer</Card.Title>
          <p class="text-info" style={{ fontSize: '20px' }}>Pick a fasting time below and watch the clock count down the time until your next meal.</p>
          <Time hours={this.state.hours} value={this.state.value} seconds={this.state.seconds} />
          <button className="btn btn-lg btn-primary" style={{ marginLeft: '25px' }} onClick={this.reset}>Reset</button>
          <button className="btn btn-lg btn-danger" style={{ marginLeft: '75px' }} onClick={this.stop}>Stop</button>
          <ProgressBar animated variant="success" style={{ marginTop: '7vh' }} now={this.secondsRemaining / (this.state.start * 60 * 60) * 100} />
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Card bg="secondary" style={{ width: '80rem', height: '50vh' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '80px' }}>Intermittent Fasting Timer</Card.Title>
          <p class="text-info" style={{ fontSize: '20px' }}>Pick a fasting time below and watch the clock count down the time until your next meal.</p>
          <Time hours={this.state.hours} value={this.state.value} seconds={this.state.seconds} />
          <button className="btn btn-lg btn-primary" onClick={this.sixteenEight}>16:8</button>
          <button className="btn btn-lg btn-primary" style={{ marginLeft: '25px' }} onClick={this.eighteenSix}>18:6</button>
          <button className="btn btn-lg btn-primary" style={{ marginLeft: '25px' }} onClick={this.customTime}>Custom</button>
          <StartButton startCountDown={this.startCountDown} value={this.state.value} />
          {this.state.isCustom ? <TimerInput value={this.state.hours} handleChange={this.handleChange} /> : null}
          <ProgressBar striped variant="success" style={{ marginTop: '7vh' }} now={this.secondsRemaining / (this.state.start * 60 * 60) * 100} />
        </Card.Body>
      </Card>


      );
    }
  }
}




export default Timer;