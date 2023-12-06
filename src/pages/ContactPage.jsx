import { Intro } from './../components/intro';
import React, { useRef, useState } from 'react';
import './contact-page.style.css'

import { Heading } from '../components/Heading';
import emailjs from '@emailjs/browser';
import { BiSend } from 'react-icons/bi';


const INITIAL_STATE = 'initial state'
const SENT_SUCCESS = 'success'
const SENT_FAIL = 'failure'


export default function ContactPage() {

  const form = useRef();
  const [sendEmailAnimation, setSendEmailAnimation] = useState(INITIAL_STATE)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1xhg769', 'template_lgkyccn', form.current, 'xJZiI3edI9FEBoT3j')
      .then((result) => {
        emailSuccess()
      }, (error) => {
        emailFailure()
      });
  }

  function emailSuccess() {
    setSendEmailAnimation(SENT_SUCCESS)
    setTimeout(() => {
      //empty the input fields
      form.current && Object.values(form.current).slice(0, 3).map(input => {
        return input.value = ''
      })
      setSendEmailAnimation(INITIAL_STATE)
    }, 5000)
  }


  function emailFailure() {
    console.log('failure')
    setSendEmailAnimation(SENT_FAIL)
    setTimeout(() => {
      setSendEmailAnimation(INITIAL_STATE)
    }, 5000)
  }


  return (
    <section>
      <div className='contact-page'>
        <Heading title='Get in Touch' />

        <Intro text="Welcome to the contact page. If you have inquiries, collaboration proposals, or any professional matters you'd like to discuss, please use the form below. Your message is valuable, and I will promptly attend to it." />

        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name">Name</label>
          <input type="text" name="user_name" id='user_name' />
          <label htmlFor="user_id">Email</label>
          <input type="email" name="user_email" id='user_id' required />
          <label htmlFor="message">Message</label>
          <textarea name="message" id='message' required />
          <button type="submit"
            className={sendEmailAnimation === SENT_SUCCESS ? 'submit-btn sent' :
              sendEmailAnimation === SENT_FAIL ? 'submit-btn failed' : 'submit-btn'}>
            <p>Submit</p>
            <BiSend className='submit-icon' />
          </button>
        </form>

      </div >

    </section>
  )
}

