import React from 'react';
import './Testimonials.css';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

function Testimonials() {
    return (
        <div className="testimonials">
            <div className="slider">
                <div className="slider-text">
                    <p>Their clinical care is outstanding but what really sets them
                    apart is that they truly care about the well-being of their patients.
                    </p>
                    <h5>Linda Cardellini</h5>

                    <div className="chevrons">
                        <i><FiChevronRight /></i>
                        <i><FiChevronLeft /></i>
                    </div>
                </div>
                <div className="slider-text">
                    <p>I feel like the team really cares about my personal health and feels invested in my well-being into the future.
                    </p>
                    <h5>Andrew Mcgregor</h5>

                    <div className="chevrons">
                        <i><FiChevronRight /></i>
                        <i><FiChevronLeft /></i>
                    </div>
                </div>
                <div className="slider-text">
                    <p>I just can’t say enough good things about the Medical Clinic. 
                        I am so happy to be a patient there. It saved my life.
                    </p>
                    <h5>Kevin Noon</h5>

                    <div className="chevrons">
                        <i><FiChevronRight /></i>
                        <i><FiChevronLeft /></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
