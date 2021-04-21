import React, {useState} from 'react';
import './Slideshow.css';
import {Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="slider">
        <Carousel.Item>
                <div className="slider-text">
                    <p>Their clinical care is outstanding but what really sets them
                    apart is that they truly care about the well-being of their patients.
                    </p>
                    <h5>Linda Cardellini</h5>
                </div>
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="slider-text">
                    <p>Their clinical care is outstanding but what really sets them
                    apart is that they truly care about the well-being of their patients.
                    </p>
                    <h5>Linda Cardellini</h5>
                </div>
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="slider-text">
                    <p>Their clinical care is outstanding but what really sets them
                    apart is that they truly care about the well-being of their patients.
                    </p>
                    <h5>Linda Cardellini</h5>
                </div>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default ControlledCarousel;