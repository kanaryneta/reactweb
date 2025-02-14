import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

   const scrollToSection = (id) => {
      // יש לנו את ה-id של המקטע שאליו נגלול
      const processSection = document.getElementById(id);
      if (processSection) {
        // גלילה בצורה חלקה וכוללת מרווח של 100 פיקסלים מעל המקטע
        window.scrollTo({
          top: processSection.offsetTop - 150, // חישוב המיקום עם המרווח
          behavior: "smooth"
        });
      }
    };

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB' id="navBarId">
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/' onClick={() => scrollToSection("navBarId")}>עמוד הבית</Link>
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection("processSection")}>על התהליך</a>
            </li>
            <li>
              <Link to='#' onClick={() => scrollToSection("conectUsID")}>צור קשר</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
