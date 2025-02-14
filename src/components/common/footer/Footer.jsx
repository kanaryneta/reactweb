import { blog } from "../../../dummydata"
import "./footer.css"
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // שליחה של המייל דרך EmailJS
    emailjs
      .send("yrtg srfo hihz lzqd", "template_xnwf9ah", formData, "nTawnIXbvdSOYMd30")
      .then(
        (response) => {
          alert("Email sent successfully!", response);
        },
        (error) => {
          alert("Error in sending email:", error);
        }
      );
  };

  return (
    
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          
        <div className="right row">
  <div className="contact-info">
    <h1>צור קשר </h1>
    <span>ליצירת קשר חייגו - 0546616731, או השאירו פרטים:</span>
  </div>
</div>

         
          <div >
          <form onSubmit={handleSubmit} id="conectUsID">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="שם מלא"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          placeholder="טלפון"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="מייל"
          onChange={handleChange}
          required
        />
        <button type="submit">שלח <i className='fa fa-paper-plane'></i></button>
      </form>
      
        </div>
          </div>
          
      </section>
     
      
    </>
  )
}

export default Footer
