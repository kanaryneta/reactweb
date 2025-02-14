import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"

const AboutCard = () => {
 

  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
          </div>
          <div className='right row'>
            <Heading  title='?מה כולל התהליך' />
            <div className='items' id="processSection" >
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB text'>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p >{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard
