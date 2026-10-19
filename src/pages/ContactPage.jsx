import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { submitContact } from '../utils/api';

const PROJECT_TYPES = [
  'Full-Stack Development',
  'AI & Automation Agent',
  'Motorsport & Telemetry',
  'Backend & API Engineering',
  'Enterprise Software Solution',
  'Technical Collaboration'
];

const BUDGET_RANGES = [
  'Consultation / Prototype',
  'Project Milestone Delivery',
  'Long-term Startup Engagement',
  'Open Collaboration'
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('hello'); // 'hello' | 'quote'

  // Say Hello Form State
  const [helloForm, setHelloForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  // Get A Quote Form State
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Full-Stack Development',
    budget: 'Project Milestone Delivery',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    gsap.fromTo(
      '.contact_hero_title',
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
    );
    gsap.fromTo(
      '.contact_form_card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  const handleHelloSubmit = async (e) => {
    e.preventDefault();
    if (!helloForm.name.trim() || !helloForm.email.trim() || !helloForm.message.trim()) {
      setStatus('error');
      setFeedback('Please fill out all required fields.');
      return;
    }
    setStatus('loading');
    setFeedback('');

    try {
      const res = await submitContact({
        type: 'Say Hello',
        ...helloForm
      });
      if (res && res.success) {
        setStatus('success');
        setFeedback('Thank you for reaching out! I will get back to you shortly.');
        setHelloForm({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setStatus('error');
        setFeedback('Something went wrong. Please try again or email me directly.');
      }
    } catch {
      setStatus('error');
      setFeedback('Submission failed. Please check your network and try again.');
    }
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    if (!quoteForm.name.trim() || !quoteForm.email.trim() || !quoteForm.message.trim()) {
      setStatus('error');
      setFeedback('Please fill out all required fields.');
      return;
    }
    setStatus('loading');
    setFeedback('');

    try {
      const res = await submitContact({
        type: 'Get A Quote',
        ...quoteForm
      });
      if (res && res.success) {
        setStatus('success');
        setFeedback('Project inquiry received! I am reviewing your requirements and will follow up shortly.');
        setQuoteForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: 'Full-Stack Development',
          budget: 'Project Milestone Delivery',
          message: ''
        });
      } else {
        setStatus('error');
        setFeedback('Submission failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setFeedback('Submission failed. Please try again.');
    }
  };

  return (
    <div className="contact_page_view">
      <section className="contact_hero_section">
        <div className="padding_global">
          <div className="container">
            <div className="contact_hero_content">
              <div className="floating_text" style={{ marginBottom: '20px' }}>
                GET IN TOUCH
              </div>
              <h1 className="contact_hero_title">
                LET'S BUILD SOMETHING.
              </h1>
              <p className="contact_hero_subtitle">
                Have an idea, project, collaboration, or technical challenge? Let's talk.
              </p>
            </div>

            <div className="contact_layout_grid">
              {/* Studio Info Sidebar */}
              <div className="contact_info_sidebar">
                <div className="contact_info_block">
                  <h3 className="info_label">LOCATION</h3>
                  <p className="info_text">
                    Maharashtra, India
                  </p>
                </div>

                <div className="contact_info_block">
                  <h3 className="info_label">DIRECT CONTACT</h3>
                  <a href="mailto:gaikwad.nandanv@gmail.com" className="info_link" style={{ wordBreak: 'break-all' }}>
                    gaikwad.nandanv@gmail.com
                  </a>
                  <a href="tel:+918446545470" className="info_link">
                    +91 8446545470
                  </a>
                </div>

                <div className="contact_info_block">
                  <h3 className="info_label">PROFILES</h3>
                  <a href="https://github.com/Nandangaikwad1710" target="_blank" rel="noreferrer" className="info_link">
                    github.com/Nandangaikwad1710 ↗
                  </a>
                  <a href="https://www.linkedin.com/in/nandan-gaikwad-157a4a245" target="_blank" rel="noreferrer" className="info_link" style={{ marginTop: '8px' }}>
                    linkedin.com/in/nandan-gaikwad-157a4a245 ↗
                  </a>
                </div>

                <div className="contact_info_block">
                  <h3 className="info_label">AVAILABILITY</h3>
                  <p className="info_text">Open for Engineering Collaborations &amp; Projects</p>
                  <p className="info_text" style={{ color: '#b7ff93', marginTop: '6px' }}>
                    ● Active Development &amp; Research
                  </p>
                </div>
              </div>

              {/* Functional Interactive Form Card */}
              <div className="contact_form_card">
                {/* Tab Switcher */}
                <div className="contact_tab_header" role="tablist">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'hello'}
                    onClick={() => {
                      setActiveTab('hello');
                      setStatus('idle');
                      setFeedback('');
                    }}
                    className={`contact_tab_btn ${activeTab === 'hello' ? 'is-active' : ''}`}
                  >
                    SAY HELLO
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'quote'}
                    onClick={() => {
                      setActiveTab('quote');
                      setStatus('idle');
                      setFeedback('');
                    }}
                    className={`contact_tab_btn ${activeTab === 'quote' ? 'is-active' : ''}`}
                  >
                    GET A QUOTE
                  </button>
                </div>

                {status === 'success' ? (
                  <div className="contact_success_animation">
                    <div className="success_icon_ring">✓</div>
                    <h3 className="success_title">Message Dispatched!</h3>
                    <p className="success_desc">{feedback}</p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="modal_cta_button"
                      style={{ marginTop: '24px' }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    {/* TAB 1: SAY HELLO */}
                    {activeTab === 'hello' && (
                      <form onSubmit={handleHelloSubmit} className="contact_form_body" noValidate>
                        <div className="form_row_two">
                          <div className="form_field_group">
                            <label htmlFor="hello-name" className="field_label">
                              Name <span className="req">*</span>
                            </label>
                            <input
                              id="hello-name"
                              type="text"
                              required
                              placeholder="Your name"
                              className="contact_input"
                              value={helloForm.name}
                              onChange={(e) => setHelloForm({ ...helloForm, name: e.target.value })}
                            />
                          </div>
                          <div className="form_field_group">
                            <label htmlFor="hello-email" className="field_label">
                              Email <span className="req">*</span>
                            </label>
                            <input
                              id="hello-email"
                              type="email"
                              required
                              placeholder="Your email"
                              className="contact_input"
                              value={helloForm.email}
                              onChange={(e) => setHelloForm({ ...helloForm, email: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="form_row_two">
                          <div className="form_field_group">
                            <label htmlFor="hello-phone" className="field_label">Phone</label>
                            <input
                              id="hello-phone"
                              type="tel"
                              placeholder="Phone number"
                              className="contact_input"
                              value={helloForm.phone}
                              onChange={(e) => setHelloForm({ ...helloForm, phone: e.target.value })}
                            />
                          </div>
                          <div className="form_field_group">
                            <label htmlFor="hello-company" className="field_label">Company Name</label>
                            <input
                              id="hello-company"
                              type="text"
                              placeholder="Company name"
                              className="contact_input"
                              value={helloForm.company}
                              onChange={(e) => setHelloForm({ ...helloForm, company: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="form_field_group">
                          <label htmlFor="hello-message" className="field_label">
                            Message <span className="req">*</span>
                          </label>
                          <textarea
                            id="hello-message"
                            rows={4}
                            required
                            placeholder="Write your thoughts"
                            className="contact_textarea"
                            value={helloForm.message}
                            onChange={(e) => setHelloForm({ ...helloForm, message: e.target.value })}
                          />
                        </div>

                        {status === 'error' && (
                          <div className="form_error_banner">{feedback}</div>
                        )}

                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="contact_submit_btn"
                        >
                          {status === 'loading' ? 'Transmitting...' : 'Send Message ↗'}
                        </button>
                      </form>
                    )}

                    {/* TAB 2: GET A QUOTE */}
                    {activeTab === 'quote' && (
                      <form onSubmit={handleQuoteSubmit} className="contact_form_body" noValidate>
                        <div className="form_row_two">
                          <div className="form_field_group">
                            <label htmlFor="quote-name" className="field_label">
                              Name <span className="req">*</span>
                            </label>
                            <input
                              id="quote-name"
                              type="text"
                              required
                              placeholder="Your name"
                              className="contact_input"
                              value={quoteForm.name}
                              onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                            />
                          </div>
                          <div className="form_field_group">
                            <label htmlFor="quote-email" className="field_label">
                              Email <span className="req">*</span>
                            </label>
                            <input
                              id="quote-email"
                              type="email"
                              required
                              placeholder="Your email"
                              className="contact_input"
                              value={quoteForm.email}
                              onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="form_row_two">
                          <div className="form_field_group">
                            <label htmlFor="quote-phone" className="field_label">Phone</label>
                            <input
                              id="quote-phone"
                              type="tel"
                              placeholder="Phone number"
                              className="contact_input"
                              value={quoteForm.phone}
                              onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                            />
                          </div>
                          <div className="form_field_group">
                            <label htmlFor="quote-company" className="field_label">Company Name</label>
                            <input
                              id="quote-company"
                              type="text"
                              placeholder="Company name"
                              className="contact_input"
                              value={quoteForm.company}
                              onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="form_row_two">
                          <div className="form_field_group">
                            <label htmlFor="quote-project-type" className="field_label">Project Types</label>
                            <select
                              id="quote-project-type"
                              className="contact_select"
                              value={quoteForm.projectType}
                              onChange={(e) => setQuoteForm({ ...quoteForm, projectType: e.target.value })}
                            >
                              {PROJECT_TYPES.map((pt) => (
                                <option key={pt} value={pt}>{pt}</option>
                              ))}
                            </select>
                          </div>
                          <div className="form_field_group">
                            <label htmlFor="quote-budget" className="field_label">Budget</label>
                            <select
                              id="quote-budget"
                              className="contact_select"
                              value={quoteForm.budget}
                              onChange={(e) => setQuoteForm({ ...quoteForm, budget: e.target.value })}
                            >
                              {BUDGET_RANGES.map((b) => (
                                <option key={b} value={b}>{b}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="form_field_group">
                          <label htmlFor="quote-message" className="field_label">
                            Project Scope & Details <span className="req">*</span>
                          </label>
                          <textarea
                            id="quote-message"
                            rows={4}
                            required
                            placeholder="Tell us about the deliverables, timeline, and goals"
                            className="contact_textarea"
                            value={quoteForm.message}
                            onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                          />
                        </div>

                        {status === 'error' && (
                          <div className="form_error_banner">{feedback}</div>
                        )}

                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="contact_submit_btn"
                        >
                          {status === 'loading' ? 'Calculating Scope...' : 'Request Project Quote ↗'}
                        </button>
                      </form>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
