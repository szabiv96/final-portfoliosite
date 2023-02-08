import React from 'react';
import { Container } from 'react-bootstrap';


export default function Contacts({contactRef}) {
  return (
    <Container fluid className='d-flex justify-content-center contacts' ref={contactRef}>
        <div className=' d-flex flex-column justify-content-center m-5 w-80'>
            <h1>Keep in touch!</h1>
            <h3><a href="szabi.v96@gmail.com">Email</a></h3> {/* email legyen majd egy pop up ablak amiben írsz és elküldi az emailemre a dolgot */}
            <h3><a href="https://www.behance.net/szabolcvarga96">Behance</a></h3>
            <h3><a href="https://github.com/szabiv96">GitHub</a></h3>
        </div>
    </Container>
  )
}
