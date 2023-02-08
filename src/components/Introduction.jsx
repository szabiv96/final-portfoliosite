import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import self from '../images/self.png'

export default function Introduction({homeRef, introRef}) {
    return (
        <Container ref={homeRef} fluid className='introduction'>
            <Container fluid className='welcome' id='welcome'>
                <div><h1>Hey! My name is Szabolcs Lajos Varga:</h1></div>
                <div><h2>Junior web developer & creative coder</h2></div>
                <div><h3><span className="material-symbols-outlined">location_on</span> Based in Budapest, Hungary</h3></div>
            </Container>
            <Container ref={introRef} fluid>
                <Row className='details' id='details'>
                    <Col className='d-flex justify-content-start flex-column'>
                        <div><h1>" 1 problem several solutions,</h1></div>
                        <div><h2>... and the wheel is already invented, what is needs to be perfected!</h2></div>
                    </Col>
                    <Col className='d-flex justify-content-between flex-row '>
                        <div className='mr w-100'><p>As a junior web developer, it is really 
                            important for me to seize every opportunity to develop my skills and also myself, so I am constantly working on something. During the
                             university, I gained different kind of work experiences, and improved my visual, aesthetic and design skillset. As part of Codecool, I learned the basics of coding.
                              Now I am confidently using different graphic design softwares for supporting my work as a front end developer. 
                              My different kind of experiences are prepeared me working with different people with different professional background and 
                              understand my role in a complex work enviroment.</p></div>
                        <div ><img src={self} alt="" width="100%" /></div>
                    </Col>
                </Row>
            </Container>

        </Container>
    )
}
