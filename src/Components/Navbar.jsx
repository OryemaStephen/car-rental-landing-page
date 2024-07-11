import { Container, Nav, Navbar, Image } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

function Navbars() {
  // const navigate = useNavigate();
  
  // const handleLoginClick = () => navigate('/login');
  // const handleRegisterClick = () => navigate('/register');

  return (
    <Navbar collapseOnSelect expand="lg" className="container-fluid bg-black" fixed="top">
      <Container fluid="lg">
        <Navbar.Brand href='#home'>
          <Image src="./src/assets/logo.png" rounded className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex w-50 justify-content-between">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#fleet" className="text-white" >Fleet</Nav.Link>
            <Nav.Link href="#about" className="text-white">About Us</Nav.Link>
            <Nav.Link href="#footer" className="text-white">Contact Us</Nav.Link>
          </Nav>
          {/* <Nav className="ms-auto">
            <Nav.Link className="text-white" onClick={handleLoginClick}>Login</Nav.Link>
            <Nav.Link className="text-white" onClick={handleRegisterClick}>Register</Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navbars;
