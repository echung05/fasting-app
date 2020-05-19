import Card from 'react-bootstrap/Card';
const React = require('react')

  class History extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
  
    render() {
        return (
              <Card bg="secondary" style={{ marginTop: '10vh', width: '80rem', height: '20vh'}}>
  <Card.Body>
    <Card.Title style={{ fontSize: '25px'}}>History</Card.Title>
  </Card.Body>
</Card>
               
        );
      }
    }
 
export default History;