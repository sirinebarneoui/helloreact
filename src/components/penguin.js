import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './penguins.jpg';
 const Penguin=()=> {
    return(
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} alt="Not found"/>
        <Card.Body>
          <Card.Title>Wildlife</Card.Title>
          <Card.Text>
          Penguins are flightless seabirds that live almost exclusively below the equator. Some island-dwellers can be found in warmer climates
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>)}
      export default Penguin
    
