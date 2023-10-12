import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import datas from '../listofprojects.json';

export default function Projects({ projectsRef, cvRef }) {

    /* console.log(datas) */

    return (
        <>
            <h4 ref={cvRef}>Are you interested in my work ?</h4>
            <h1>DOWNLOAD MY <a href="images/0607CVVargaSzabolcsmagyar.pdf" target="_blank" rel="noreferrer">CV</a>!</h1>
            <h3>or ... Read about my projects !</h3>

            <Container fluid ref={projectsRef} className='projects d-flex flex-row justify-content-around flex-wrap g-1 p-5'>
                {
                    datas.map((data) => (
                        <Card key={data.id} >
                            <Card.Img variant="top" src={data.imgURL} />
                            <Card.Body>
                                {
                                    data.documentation.map((docu, index) => (
                                        <a key={index} href={Object.values(docu)} target="_blank" rel="noreferrer" ><button>{Object.keys(docu)}</button></a>
                                    ))
                                }
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Text>
                                    {data.summary}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            </Container>
        </>
    )
}