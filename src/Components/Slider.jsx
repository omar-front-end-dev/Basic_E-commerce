import { Carousel } from "react-bootstrap";

import  img1  from '../assets/images/hero_images/image-1.jpeg';
import  img2  from '../assets/images/hero_images/image-2.jpeg';
import  img3  from '../assets/images/hero_images/image-3.jpeg';

export function Slider() {
  return (
    <Carousel className="slider">
      <Carousel.Item className="slid__item position-relative">
          <img src={img1} alt="carousel images" />
      </Carousel.Item>
      <Carousel.Item className="slid__item position-relative">
            <img src={img2} alt="carousel images" />
      </Carousel.Item>
      <Carousel.Item className="slid__item position-relative">
            <img src={img3} alt="carousel images" />
      </Carousel.Item>
    </Carousel>
  )
}
