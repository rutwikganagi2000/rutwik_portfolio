import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import '../styles/components/contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
      setMessage({ text: 'Message sent successfully!', type: 'success' });
      form.current.reset();
    }, (error) => {
      setMessage({ text: 'Failed to send message. Please try again.', type: 'error' });
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="contact__content"
        >
          <h2 className="section__title">Get In Touch</h2>
          <div className="contact__grid">
            <div className="contact__info">
              <h3>Contact Information</h3>
              <p>
                Feel free to reach out to me for job opportunities, collaborations, or just to say hello!
              </p>
              <ul className="contact__details">
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>ganagi.r@northeastern.edu</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>(857)-421-9255</span>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Boston, MA</span>
                </li>
              </ul>
              <div className="contact__social">
                <a href="https://github.com/rutwikganagi2000" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/rutwik-ganagi" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="form__group">
                <input type="text" name="user_name" placeholder="Name" required />
              </div>
              <div className="form__group">
                <input type="email" name="user_email" placeholder="Email" required />
              </div>
              <div className="form__group">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="form__group">
                <textarea name="message" placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {message.text && (
                <div className={`form__message ${message.type}`}>
                  {message.text}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;