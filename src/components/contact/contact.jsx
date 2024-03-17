import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import emailjs from 'emailjs-com'
import { useRef } from 'react';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kzvr53e', 'template_oq17pa4', form.current,'xhjBrYrti5bp8evFA') 

     e.target.reset(); 
    
  };
  
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact_options_icons' />
            <h4>Email</h4>
            <h5>pratikshasanam@gmail.com</h5>
            <a href='mailto:pratikshasanam@gmail.com' target='_blank' rel="noopener noreferrer">
              Send Email
            </a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact_options_icons' />
            <h4>Messenger</h4>
            
            <a href='https://m.me/ernest' target='_blank' rel="noopener noreferrer">
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact_options_icons' />
            <h4>WhatsApp</h4>
            <h5>+7719927297</h5>
            <a href='https://api.whatsapp.com/send?phone=+7719927297' target='_blank' rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
