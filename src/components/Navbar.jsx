import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample({projectsRef, homeRef, introRef, recentRef, cvRef, contactRef}) {

  return (
    <Navbar collapseOnSelect expand="lg"  variant="light" className='sticky-top'>
      <Container>
        <Navbar.Brand href="#home">PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => homeRef.current.scrollIntoView()}>Home</Nav.Link>
            <Nav.Link onClick={() => introRef.current.scrollIntoView()}>Introduction</Nav.Link>
            <Nav.Link onClick={() => recentRef.current.scrollIntoView()}>Recent Works</Nav.Link>
            <Nav.Link onClick={() => cvRef.current.scrollIntoView()}>CV</Nav.Link>
            <Nav.Link onClick={() => projectsRef.current.scrollIntoView()}>Projects</Nav.Link>
            <Nav.Link onClick={() => contactRef.current.scrollIntoView()}>Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;