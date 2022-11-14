import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
// import pic5 from "../pics/pic-5.jpg";
// import pic6 from "../pics/pic-6.jpg";
// import pic7 from "../pics/pic-7.jpg";
// import pic8 from "../pics/pic-8.jpg";
// import pic9 from "../pics/pic-9.jpg";
// import pic10 from "../pics/pic-10.jpeg";
import { data } from "../utils/data";
import { useParams } from 'react-router-dom';



const Detail = () => {

  const { id } = useParams();

  return (


    data.map((item) => {
      if (item.sno == id) {
        
        return (
          <Container className="my-3">
            <Row className="my-1">
              <Col xs={12}>
                <Image style={{width:900,height:500,marginLeft:60}} src={item.img} fluid />
              </Col>
            </Row>
            <Row className="my-5">
              <Col xs={12}><h1>{item.name}</h1> </Col>
            </Row>
            <Row>
              <Col><p>{item.desc}</p></Col>
            </Row>
            <Table striped className="mx-auto my-5">


          
              <tbody>
                {
                  Object.keys(item.features).map((key,i)=> (
                <tr key={i}>
                  <td><strong>{key}</strong></td>
                  <td>{item.features[key]}</td>
                </tr>
                  ))
                }
                  
    
                
                {/* </tr>
                

                
                <tr>
                  <td>First flight</td>
                  <td>20 August 1992[2]</td>
                </tr>
                <tr>
                  <td>Introduction</td>
                  <td>March 2002[3]</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>In service</td>
                </tr>
                <tr>
                  <td>Primary users</td>
                  <td>Indian Army</td>
                </tr>
                <tr>
                  <td>Produced</td>
                  <td>1992–present</td>
                </tr>
                <tr>
                  <td>Number built</td>
                  <td>335</td>
              </tr> */}



              </tbody>
            </Table>


          </Container>
        );
      }
    })

  );

}

export default Detail;