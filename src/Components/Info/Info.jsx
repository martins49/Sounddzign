//import React from 'react'
import "./info.css"
import { students, student2 } from "../../assets"

const Info = () => {
  return (
    <section id="info" className="dark-grey">
      <div className="wrapper space">
        <img src={students} className="students"/>
        <img src={student2} className="students"/>
      </div>

    </section>
  )
}

export default Info