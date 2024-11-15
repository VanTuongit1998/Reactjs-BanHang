import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'
function SliderComponent(){
    return(
        <Carousel className='Carousel' interval={3000} pause="hover" controls={true}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cotton4u.vn/files/news/2024/10/22/804e2a9952aafadd412814817f01da87.webp"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cotton4u.vn/files/news/2024/10/30/aea806dab6ac05647f4514fe408ec924.webp"
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cotton4u.vn/files/news/2024/10/29/0b318663e0d9258d09c666643c1b133f.webp"
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    )
}
export default SliderComponent