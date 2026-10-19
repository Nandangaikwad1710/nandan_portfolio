import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitNewsletter } from '../utils/api';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setFeedbackMsg('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    setFeedbackMsg('');
    try {
      const res = await submitNewsletter(email);
      if (res && res.success) {
        setStatus('success');
        setFeedbackMsg('Thank you for subscribing to engineering updates from Nandan Gaikwad!');
        setEmail('');
      } else {
        setStatus('error');
        setFeedbackMsg('Subscription failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setFeedbackMsg('Something went wrong. Please try again later.');
    }
  };

  return (
    <footer id="contact" className="footer" role="contentinfo">
      <div className="padding_global">
        <div className="container">
          <div className="footer_top_wrapper">
            <div className="footer_links">
              {/* Column 1: Contact */}
              <div className="footer_link_col">
                <p className="footer_link_col_heading">Contact</p>
                <p className="footer_address_text">
                  Maharashtra, India
                </p>
                <div className="footer_contact_link_wrapper">
                  <a href="mailto:gaikwad.nandanv@gmail.com" className="link-primary text-18px">
                    gaikwad.nandanv@gmail.com
                  </a>
                  <a href="tel:+918446545470" className="link-primary text-18px">
                    +91 8446545470
                  </a>
                </div>
              </div>

              {/* Column 2: Core Pages */}
              <div className="footer_link_col">
                <p className="footer_link_col_heading">Navigation</p>
                <div className="footer_link_wrapper">
                  <Link to="/" className="footer_link_widget w-inline-block">
                    <p className="footer_link_text">Home</p>
                    <p className="footer_link_text secondary-text">Home</p>
                  </Link>
                  <Link to="/about-us" className="footer_link_widget w-inline-block">
                    <p className="footer_link_text">About</p>
                    <p className="footer_link_text secondary-text">About</p>
                  </Link>
                  <Link to="/service" className="footer_link_widget w-inline-block">
                    <p className="footer_link_text">Stack</p>
                    <p className="footer_link_text secondary-text">Stack</p>
                  </Link>
                  <Link to="/contact-us" className="footer_link_widget w-inline-block">
                    <p className="footer_link_text">Contact</p>
                    <p className="footer_link_text secondary-text">Contact</p>
                  </Link>
                </div>
              </div>

              {/* Column 3: Work & Editorial */}
              <div className="footer_link_col">
                <p className="footer_link_col_heading">Showcase</p>
                <div className="footer_link_wrapper">
                  <Link to="/projects" className="footer_link_widget w-inline-block">
                    <p className="footer_link_text">Projects</p>
                    <p className="footer_link_text secondary-text">Projects</p>
                  </Link>
                  <Link to="/blogs" className="footer_link_widget w-inline-block">
                    <p className="footer_link_text">Journal</p>
                    <p className="footer_link_text secondary-text">Journal</p>
                  </Link>
                  <Link to="/projects/f1-live-telemetry-platform" className="footer_link_widget w-inline-block">
                    <p className="footer_link_text">Telemetry Platform</p>
                    <p className="footer_link_text secondary-text">Telemetry Platform</p>
                  </Link>
                  <Link to="/post/engineering-real-time-motorsport-telemetry-dashboards" className="footer_link_widget w-inline-block">
                    <p className="footer_link_text">Tech Journal</p>
                    <p className="footer_link_text secondary-text">Tech Journal</p>
                  </Link>
                </div>
              </div>

              {/* Column 4: Utilities */}
              <div className="footer_link_col">
                <p className="footer_link_col_heading">Utilities</p>
                <div className="footer_link_wrapper">
                  <Link to="/utilities/style-guide" className="footer_link_widget w-inline-block">
                    <p className="footer_link_text">Style guide</p>
                    <p className="footer_link_text secondary-text">Style guide</p>
                  </Link>
                  <Link to="/utilities/licenses" className="footer_link_widget w-inline-block">
                    <p className="footer_link_text">Licenses</p>
                    <p className="footer_link_text secondary-text">Licenses</p>
                  </Link>
                  <Link to="/utilities/changelog" className="footer_link_widget w-inline-block">
                    <p className="footer_link_text">Change Log</p>
                    <p className="footer_link_text secondary-text">Change Log</p>
                  </Link>
                  <Link to="/404" className="footer_link_widget w-inline-block">
                    <p className="footer_link_text">404</p>
                    <p className="footer_link_text secondary-text">404</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="footer_cta">
              <p className="footer_link_col_heading">Join Updates</p>
              <div className="footer_cta_form_block w-form">
                <form onSubmit={handleSubscribe} className="footer_cta_form" aria-label="Newsletter Subscription">
                  <input
                    className="footer_cta_input w-input"
                    maxLength={256}
                    name="email"
                    placeholder="Email"
                    type="email"
                    id="newsletter-email"
                    aria-label="Email address for updates"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    required
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="footer_cta_submit_button w-button"
                  >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe now'}
                  </button>
                </form>

                {status === 'success' && (
                  <div className="w-form-done" style={{ display: 'block', marginTop: '10px', color: '#b7ff93' }}>
                    <div>{feedbackMsg}</div>
                  </div>
                )}
                {status === 'error' && (
                  <div className="w-form-fail" style={{ display: 'block', marginTop: '10px', color: '#ffa5a6' }}>
                    <div>{feedbackMsg}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="footer_bottom_wrapper">
            <p className="footer_copyright_text">
              © 2026 NANDAN GAIKWAD. All rights reserved.
            </p>
            <div className="footer_social_links">
              <Link to="/admin" className="link-primary text-14px" style={{ opacity: 0.6, marginRight: '20px' }}>
                Console
              </Link>
              <a href="https://github.com/Nandangaikwad1710" target="_blank" rel="noreferrer" className="link-primary text-14px" aria-label="GitHub">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/nandan-gaikwad-157a4a245" target="_blank" rel="noreferrer" className="link-primary text-14px" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="mailto:gaikwad.nandanv@gmail.com" className="link-primary text-14px" aria-label="Email">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
