import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';


export function Home() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={6}>
          <div className="text-center">
            <h1>Welcome to my Audio Mixer</h1>
            <h3>Let's apply some filters</h3>
            <img src="ondas-small.gif" alt="Wave" />
            <br></br>
            <br></br>
            <Link to="/localAudio">
              <Button variant="dark">
                Local Audio
              </Button>
            </Link>
            <br></br>
            <br></br>
            <Link to="/oscilator">
              <Button variant="dark">
                Oscilator
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}