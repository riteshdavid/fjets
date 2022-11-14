import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import pic5 from "../pics/Apache_at_Air_Force_Day_Parade,_at_Air_Force_Station_Hindan,_in_Ghaziabad_(cropped).jpg";
import { Link } from "react-router-dom";
import {demoUrl} from "../utils/data";

function CardExample({img,name,id,desc}) {
  return (
    <div className="d-flex justify-content-around my-5">
      <Card style={{ width: '46rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {/* <Card.Text>
            {desc}
          </Card.Text> */}
          <Link to={id? `/detail/${id}`:demoUrl}>
          <Button variant="outline-success">Read More</Button>
          </Link>
          
        </Card.Body>
      </Card>

      
    </div>
  );
}

export default CardExample;
