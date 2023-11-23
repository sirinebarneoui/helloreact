import taswira from './flamingo-1024x683.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 const Flamingo=()=> {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={taswira} alt="Not found" />
      <Card.Body>
        <Card.Title>Crime</Card.Title>
        <Card.Text>
        Caribbean Flamingos are found on the north coast of South America, the Yucatan Peninsula in Mexico, and on several Caribbean islands. A small, isolated population also inhabits the Galapagos Islands. You can see the Flamingos in the African Journey, near the Penguin Coast exhibit.
          
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

        </div>
    )
} ;
 export default Flamingo 










