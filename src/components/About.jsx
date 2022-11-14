import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


const About=()=> {
    return (
        <Container className="my-5">
            <Row>
                <Col><strong> This app developed by Ritesh David(<a href="https://github.com/riteshdavid">Github Link</a>).</strong></Col>
            </Row>
        </Container>

    )

}

export default About;