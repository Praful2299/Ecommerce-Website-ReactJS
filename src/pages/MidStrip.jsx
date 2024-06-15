import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SlCallIn } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';

const Midstrip=()=>{
    
  const cartCount=useSelector((state)=>state.cart.cards)

  const navigate=useNavigate();

  const toCart=()=>{
    navigate('/cart')
  }
  return(
        <>
<Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid>
        <Navbar.Brand style={{display:"flex" ,alignItems:"center"}} href="#">
        <img style={{height:"60px", width:"100px"}} src='./src/images/logo.png'/>
        <h1 style={{fontSize:"30px",marginRight:"50px"}}>FreshSpecs</h1>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  style={{cursor:"default " , marginRight:"80px"}}><SlCallIn/> 1800-100-200</Nav.Link>
            
            <Form className="d-flex">
            <Form.Control style={{padding:"0px 50px"}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success " style={{marginRight:"140px"}}>Search</Button>
          </Form>
            
            <Nav.Link href="#action1" style={{}}>Track Order</Nav.Link>
            
            
           
           <Nav.Link href="#action2"><FaRegHeart/> WishList</Nav.Link>
           <Nav.Link href="" onClick={toCart}> Cart: <Badge onClick={toCart} bg="secondary">
            {cartCount.length}</Badge>  </Nav.Link>

           <NavDropdown title="SignIn & SignUp" id="navbarScrollingDropdown">
              <NavDropdown.Item href="login">LogIn</NavDropdown.Item>
              <NavDropdown.Item href="registration">
                SignUp
              </NavDropdown.Item>
              <NavDropdown.Divider />
           </NavDropdown>

          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Midstrip;