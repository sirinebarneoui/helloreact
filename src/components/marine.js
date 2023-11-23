import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from './marine.jpg';
const Marine=()=> {
    return (
      <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pic} alt="Not found" />
        <Card.Body>
          <Card.Title>Marine</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget luctus metus. Sed facilisis, urna lacinia viverra malesuada, leo quam cursus enim, vitae vehicula nibh arcu et ligula.
            
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
       </div>
      )
  } ;
   export default Marine
  