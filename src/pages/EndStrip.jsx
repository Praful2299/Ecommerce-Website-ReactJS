import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';


const EndStrip=()=>{
    return(
        <>
         <Nav variant="underline" className='endnav'  >
     
         <Nav.Item>
        <Nav.Link style={{color:"black"}} eventKey="link-1"  className='endn' href='home' >HOME</Nav.Link>
      </Nav.Item>
     
      <Nav.Item>
        <Nav.Link style={{color:"black"}} eventKey="link-1"  className='endn' href='eyeglasses' >EYEGLASSES</Nav.Link>
      </Nav.Item>
     
      <Nav.Item>
        <Nav.Link style={{color:"black"}}  eventKey="link-2" className='endn' href='computerglasses' >COMPUTER GLASSES</Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link style={{color:"black"}}  eventKey="link-3" className='endn' href='kidsglasses' >KIDS GLASSES</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link style={{color:"black"}}  eventKey="link-4" className='endn' href='contactlenses' >CONTACT LENSES</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link style={{color:"black"}} eventKey="link-5" className='endn ' href='sunglasses' >SUN GLASSES</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link style={{color:"black"}}  eventKey="link-6" className='endn' href='eyetest' >HOME EYE-TEST</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link style={{marginRight:"280px",color:"black"}} eventKey="link-7" className='endn' href='storelocator' >STORE LOCATOR</Nav.Link>
      </Nav.Item>
      <Button  variant="success" className='endbutton' >3D TryOn</Button>{' '}  
      <Button variant="dark">GOLD MAX</Button> 
    </Nav>
        </>
    )
}
export default EndStrip