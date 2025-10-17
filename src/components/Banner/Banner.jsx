import React from 'react'
import "./Banner.scss"
import Carousel from 'react-bootstrap/Carousel';
import bags from "../../assets/image/bags.png"
import wallets from "../../assets/image/wallets.png"
import belts from "../../assets/image/belts.png"
import walllet from "../../assets/image/walllet.png"
import umbrella from "../../assets/image/umbrella.png"

function Banner() {
  return (
  
    <div className='banner'>
      
        <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={bags} alt="" className='images-d'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={wallets} alt="" className='images-d' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={belts} alt="" className='images-d' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={walllet} alt="" className='images-d' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={umbrella} alt="" className='images-d' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner
