
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import pic5 from "../pics/Apache_at_Air_Force_Day_Parade,_at_Air_Force_Station_Hindan,_in_Ghaziabad_(cropped).jpg";

function CardExample(props) {
  return (
    <div className="d-flex justify-content-around my-5">
      <Card style={{ width: '26rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.desc}
          </Card.Text>
          <Button variant="outline-success">Read More</Button>
        </Card.Body>
      </Card>

      
    </div>
  );
}

export default CardExample;
