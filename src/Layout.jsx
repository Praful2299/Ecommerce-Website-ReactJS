import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navibar from './components/Navibar';
import Footerji from './components/Footer';
import { Outlet } from 'react-router-dom';

const Layout=()=>{
    return(
        <>
        <Container fluid>
      <Row>
        <Col>
        <Navibar/>
        <Outlet/>
        <Footerji/>
        </Col>
      </Row>
    </Container>
        </>
    )
}
export default Layout;

