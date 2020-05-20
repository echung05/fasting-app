import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
const React = require('react')

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    
  this.fasts = [
    {
      date: "3/3/2020",
      expTime: 5,
      actualTime: 5,
      status: "Success!"
    },
    {
      date: "3/3/2020",
      expTime: 5,
      actualTime: 5,
      status: "Success!"
    },
    {
      date: "3/3/2020",
      expTime: 5,
      actualTime: 5,
      status: "Success!"
    },
    {
      date: "3/3/2020",
      expTime: 4,
      actualTime: 5,
      status: "Success!"
    }
  ];
  }
  
  render(){
      return(
    <Card bg="secondary" style={{ marginTop: '5vh', marginBottom: '-5vh', width: '80rem', height: '30vh' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '25px' }}>History</Card.Title>

        <CardDeck>
          {this.fasts.map( (fast) => {
            return(
                
              
              {isSuccess = (fast.expTime - fast.actualTime === 0) ? (
                <Card bg="light" text="dark" style={{ marginTop: '2vh', width: '15rem', height: '18vh' }}>
                    <Card.Header className="text-light bg-success" style={{ fontSize: '17px' }}> {fast.date}</Card.Header> 
                    <Card.Body>
                        <Card.Title style={{ fontSize: '20px' }}> {fast.time} </Card.Title>
                        <Card.Text style={{ fontSize: '15px' }}> Success! </Card.Text>
                    </Card.Body> 
                </Card>
              ) : 
              (
                <Card bg="light" text="dark" style={{ marginTop: '2vh', width: '15rem', height: '18vh' }}>
                    <Card.Header className="text-light bg-danger" style={{ fontSize: '17px' }}> {fast.date}</Card.Header>
                    <Card.Body>
                        <Card.Title style={{ fontSize: '20px' }}> {fast.time} </Card.Title>
                        <Card.Text style={{ fontSize: '15px' }}> Failure </Card.Text>
                    </Card.Body>
                </Card>
              )
            }
 
            
            )
          })}
        </CardDeck>

      </Card.Body>
    </Card>
      );
}
  
  }
  export default History;

//   render() {
//     return (
//       <Card bg="secondary" style={{ marginTop: '5vh', marginBottom: '-5vh', width: '80rem', height: '30vh' }}>
//         <Card.Body>
//           <Card.Title style={{ fontSize: '25px' }}>History</Card.Title>

//           <CardDeck>

//             <Card bg="light" text="dark" style={{ marginTop: '2vh', width: '15rem', height: '18vh' }}>
//               <Card.Header className="text-light bg-success" style={{ fontSize: '17px' }}>3/3/2020</Card.Header>
//               <Card.Body>
//                 <Card.Title style={{ fontSize: '20px' }}> 5h / 5h </Card.Title>
//                 <Card.Text style={{ fontSize: '15px' }}> Success! </Card.Text>
//               </Card.Body>
//             </Card>

//             <Card bg="light" text="dark" style={{ marginTop: '2vh', width: '15rem', height: '18vh' }}>
//               <Card.Header className="text-light bg-success" style={{ fontSize: '17px' }}>4/10/2020</Card.Header>
//               <Card.Body>
//                 <Card.Title style={{ fontSize: '20px' }}> 10h / 10h </Card.Title>
//                 <Card.Text style={{ fontSize: '15px' }}> Success! </Card.Text>
//               </Card.Body>
//             </Card>

//             <Card bg="light" text="dark" style={{ marginTop: '2vh', width: '15rem', height: '18vh' }}>
//               <Card.Header className="text-light bg-danger" style={{ fontSize: '17px' }}>5/1/2020</Card.Header>
//               <Card.Body>
//                 <Card.Title style={{ fontSize: '20px' }}> 5h 30m / 10h </Card.Title>
//                 <Card.Text style={{ fontSize: '15px' }}> Not a Success </Card.Text>
//               </Card.Body>
//             </Card>


//             <Card bg="light" text="dark" style={{ marginTop: '2vh', width: '15rem', height: '18vh' }}>
//               <Card.Header className="text-light bg-success" style={{ fontSize: '17px' }}>5/11/2020</Card.Header>
//               <Card.Body>
//                 <Card.Title style={{ fontSize: '20px' }}> 2h 30m / 10h </Card.Title>
//                 <Card.Text style={{ fontSize: '15px' }}> Success! </Card.Text>
//               </Card.Body>
//             </Card>

//           </CardDeck>

//         </Card.Body>
//       </Card>

//     );
//   }
// }

