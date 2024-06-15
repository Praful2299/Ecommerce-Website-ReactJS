import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const TopCards=()=>{
    return  (
        <>
       <div className='topcards'> 
    <Card className='topcardin' >
      <img src="./src/images/eyeglass.webp" alt="" />
      <Card.Body>
      
        <Button style={{marginLeft:"47px"}} variant="outline-success">Eye Glasses</Button>
      </Card.Body>
    </Card>
    
    <Card className='topcardin'>
      <img src="./src/images/computerglass.webp" alt="" />
      <Card.Body>
      
        <Button style={{marginLeft:"20px"}} className='btntopcard' variant="success">Computer Glasses</Button>
      </Card.Body>
    </Card>
    
    <Card className='topcardin' >
      <img src="./src/images/sunglass.webp" alt="" />
      <Card.Body>
      
        <Button style={{marginLeft:"47px"}} variant="outline-success">Sun Glasses</Button>
      </Card.Body>
    </Card>

    <Card className='topcardin' >
      <img src="./src/images/contactlens.webp" alt="" />
      <Card.Body>
      
        <Button style={{marginLeft:"40px"}} className='btntopcard' variant="success">Contact Lens</Button>
      </Card.Body>
    </Card>

    <Card className='topcardin' >
      <img src="./src/images/powerglass.webp" alt="" />
      <Card.Body>
      
        <Button style={{marginLeft:"40px"}} variant="outline-success">Power Glasses</Button>
      </Card.Body>
    </Card>

    <Card className='topcardin' >
      <img src="./src/images/progressivelens.webp" alt="" />
      <Card.Body>
      
        <Button style={{marginLeft:"27px"}} className='btntopcard' variant="success">Progressive Lens</Button>
      </Card.Body>
    </Card>
    
    </div>
       
        </>
    )
}
export default TopCards;