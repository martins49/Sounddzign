import React from 'react'
import "./Topics.css"
import { Reactangle13, Reactangle14, Reactangle15, Reactangle16, Reactangle17, Reactangle18 } from "../../assets"

const Topics = () => {
  const [CurrentImage, setCurrentImage] = React.useState(Reactangle13)

  
  return (
    <section id="course" className="black">
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul className='course-list'>
            <li onMouseEnter={()=> setCurrentImage(Reactangle13)}>What are frequencies?</li>
            <li onMouseEnter={()=> setCurrentImage(Reactangle14)}>Using DAW</li>
            <li onMouseEnter={()=> setCurrentImage(Reactangle15)}>Vocals Processing</li>
            <li onMouseEnter={()=> setCurrentImage(Reactangle16)}>Mixing</li>
            <li onMouseEnter={()=> setCurrentImage(Reactangle17)}>Mixing Console</li>
            <li onMouseEnter={()=> setCurrentImage(Reactangle18)}>Mastering</li>
          </ul>

          <div className="topic-name">
            <img src={CurrentImage}/>

          </div>

        </div>

      </div>



    </section>
  )
}

export default Topics