import React,{useState} from "react"
import Carousel from 'react-bootstrap/Carousel';
import pic1 from "../pics/pic-1.jpg";
import pic2 from "../pics/pic-2.jpg";
import pic3 from "../pics/pic-3.jpg";





function CarouselProducts() {
    
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
          height="642px"
          width="1116px"
        />
        <Carousel.Caption bg="dark">
          <h3>Sale 40% Off</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
          height="642px"
          width="1116px"
        />

        <Carousel.Caption>
          <h3>Sale 30% Off</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Third slide"
          height="642px"
          width="1116px"
        />

        <Carousel.Caption>
          <h3>Sale 20% Off</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselProducts;
