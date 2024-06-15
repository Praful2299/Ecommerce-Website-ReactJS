import Carousel from 'react-bootstrap/Carousel';


function TopCarousel() {
  return (
    <Carousel style={{height:"500px",marginTop:"10px"}}>
      
      <Carousel.Item className="carousel1">
        <img  src='./src/images/carousel1.webp' />
      </Carousel.Item>
      
      <Carousel.Item className="carousel1">
      <img src='./src/images/carousel2.webp' />
      </Carousel.Item>
      
      <Carousel.Item className="carousel1">
      <img src='./src/images/carousel3.webp' />
      </Carousel.Item>
      
      <Carousel.Item className="carousel1">
      <img src='./src/images/carousel4.webp' />
      </Carousel.Item>
      
      <Carousel.Item className="carousel1">
      <img src='./src/images/carousel5.webp' />
      </Carousel.Item>
      
      <Carousel.Item className="carousel1">
      <img src='./src/images/carousel6.webp' />
      </Carousel.Item>
   
    </Carousel>
  );
}

export default TopCarousel;