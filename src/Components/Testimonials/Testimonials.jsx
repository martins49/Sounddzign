//import React from 'react'
import "./Testimonials.css"
import { Reactangle20, Reactangle21, Reactangle22 } from "../../assets"

const Testimonials = () => {
  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What our students say?</h2>

        <div className="content-container">
          <div className="testimonial">
            <div></div><img src={Reactangle20} />
            <div className="review-details">
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">This is a great course. I got to learn a lot.</div>
            </div>
          </div>
          <div className="testimonial">
            <div></div><img src={Reactangle22} />
            <div className="review-details">
              <div className="name">Emily Smith</div>
              <div className="company-name">Twitter</div>
              <div className="review">Awesome! Great job!!</div>
            </div>
          </div>
          <div className="testimonial">
            <div></div><img src={Reactangle21} />
            <div className="review-details">
              <div className="name">Robert Fox</div>
              <div className="company-name">Insagram</div>
              <div className="review">I got to learn a lot about Music Production with this course. Thanks :</div>
            </div>
          </div>
        </div>


      </div>

    </section>
  )
}

export default Testimonials