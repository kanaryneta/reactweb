import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading title='אם כבר משכנתא אז שתהיה אחת טובה' />
            <p>ייעוץ משכנתאות וליווי אישי</p>
            <div className='button'>
              <button className='primary-btn'>
                לשיחת ייעוץ <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
