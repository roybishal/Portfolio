import React, {useEffect} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import AOS from 'aos'
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
    });
  }, []);

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_tj91l9w', 'template_p2e7qk8', form.current, 'B3BibiKdnE25z77QR')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })

      e.target.reset()
      alert("thanks for sending the message.")
  }

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container" data-aos="slide-up">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>            
            <h5>roybishal2210@gmail.com</h5>
            <a href="mailto:roybishal2210@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>            
            <a href="https://api.whatsapp.com/send?phone=8230850722" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary btn-sendmsg'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact