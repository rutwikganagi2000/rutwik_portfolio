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
          <p className="contact__subtitle">Let's create something amazing together!</p>
          
          <div className="contact__grid">
            <div className="contact__info">
              <div className="info__card">
                <h3>Contact Information</h3>
                <p className="info__text">
                  Feel free to reach out to me for job opportunities, collaborations, or just to say hello!
                </p>
                <ul className="contact__details">
                  <li>
                    <div className="detail__icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <span>ganagi.r@northeastern.edu</span>
                  </li>
                  <li>
                    <div className="detail__icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <span>(857)-421-9255</span>
                  </li>
                  <li>
                    <div className="detail__icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <span>Boston, MA</span>
                  </li>
                </ul>
                <div className="contact__social">
                  <a href="https://github.com/rutwikganagi2000" target="_blank" rel="noopener noreferrer" className="social__link">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/in/rutwik-ganagi" target="_blank" rel="noopener noreferrer" className="social__link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="mailto:ganagi.r@northeastern.edu" className="social__link">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="form__group">
                <i className="fas fa-user input-icon"></i>
                <input type="text" name="user_name" placeholder="Your Name" required />
              </div>
              <div className="form__group">
                <i className="fas fa-envelope input-icon"></i>
                <input type="email" name="user_email" placeholder="Your Email" required />
              </div>
              <div className="form__group">
                <i className="fas fa-tag input-icon"></i>
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="form__group">
                <i className="fas fa-comment-dots input-icon textarea-icon"></i>
                <textarea name="message" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
              {message.text && (
                <div className={`form__message ${message.type}`}>
                  <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
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