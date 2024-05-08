import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function About() {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6}>
                        <div className="text-center">
                        Nume: Raduta Alexandru
		                <br></br>
		                Grupa: 332AB
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}