import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './mail.css';

const Mail=()=>{
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hcg2z9u', 'template_iordpt7', e.target, 'QhSPSi3jZtcazVKPt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return(
    <div>
      <div class="form-style-6">
      <h1>Feedback</h1>
      <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <textarea name="subject" placeholder="Subject"></textarea>
      <textarea name="message" placeholder="Message"></textarea>
      <input type="submit" value="Send" />
      </form>
      </div>
    </div>
  );
}

export default Mail;