'use client';

import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './css/ContactSection.module.css';

export default function ContactSection() {
  return (
    <div id="contact" className={styles.contactSection}>
      <div className={styles.parallax} style={{ backgroundImage: "url('/christmas_tree.webp')" }}></div>
      <div className={styles.justPattern}></div>
      <div className="container">
        <div className="sixteen columns">
          <div className={styles.topText}>
            <h1>Contact</h1>
            <div className={styles.subline}></div>
            <div className={styles.topSubtext}>Questions? Call Nathaniel at the church office at (310) 457-7966</div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="ten columns" data-scrollreveal="enter bottom and move 50px over 1s">
          <form name="ajax-form" id="ajax-form" action="#" method="post" className={styles.contactForm}>
            <label htmlFor="name">
              Your Lovely Name: *
              <span className={styles.error} id="err-name">please enter name</span>
            </label>
            <input name="name" id="name" type="text" />

            <label htmlFor="email">
              E-Mail: *
              <span className={styles.error} id="err-email">please enter e-mail</span>
              <span className={styles.error} id="err-emailvld">e-mail is not a valid format</span>
            </label>
            <input name="email" id="email" type="text" />

            <label htmlFor="message">Tell Us Everything:</label>
            <textarea name="message" id="message"></textarea>

            <div id="button-con" className={styles.buttonContainer}>
              <button type="submit" className={styles.sendMessage} id="send">Submit</button>
            </div>

            <div className={`${styles.error} ${styles.textAlignCenter}`} id="err-form">
              There was a problem validating the form please check!
            </div>
            <div className={`${styles.error} ${styles.textAlignCenter}`} id="err-timedout">
              The connection to the server timed out!
            </div>
            <div className={styles.error} id="err-state"></div>
          </form>

          <div id="ajaxsuccess" className={styles.ajaxSuccess}>Successfully sent!!</div>
        </div>
        <div className="six columns" data-scrollreveal="enter bottom and move 50px over 1s">
          <div>
            <h5>Contact Info</h5>
            <div className={styles.conInfo}>
              <div className={styles.conIcon}>
                <MapPin size={24} />
              </div>
              <a href="https://maps.google.com/" target="_blank" rel="noopener noreferrer">
                <p>28211 Pacific Coast Highway<br />Malibu, CA 90265<br />(opposite Paradise Cove)</p>
              </a>
            </div>
            <div className={`${styles.conInfo} ${styles.paddingTopCon}`}>
              <div className={styles.conIcon}>
                <Phone size={24} />
              </div>
              <a href="tel:310-457-7966">
                <p>(310) 457-7966</p>
              </a>
            </div>
            <div className={`${styles.conInfo} ${styles.paddingTopCon}`}>
              <div className={styles.conIcon}>
                <Mail size={24} />
              </div>
              <a href="mailto:office@staidanschurch.org">
                <p>office@staidanschurch.org</p>
              </a>
            </div>
            <div className={`${styles.conInfo} ${styles.paddingTopCon}`}>
              <div className={styles.conIcon}>
                <Globe size={24} />
              </div>
              <a href="https://www.facebook.com/staidanschurch" target="_blank" rel="noopener noreferrer">
                <p>Connect with us on Facebook</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

