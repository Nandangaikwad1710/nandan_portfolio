import React, { useState, useEffect } from 'react';
import { getInquiries, deleteInquiry, getSubscribers } from '../utils/api';

export default function AdminPage() {
  const [inquiries, setInquiries] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [activeTab, setActiveTab] = useState('inquiries'); // 'inquiries' | 'subscribers'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const inq = await getInquiries();
      const subs = await getSubscribers();
      if (isMounted) {
        setInquiries(Array.isArray(inq) ? inq : []);
        setSubscribers(Array.isArray(subs) ? subs : []);
        setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      await deleteInquiry(id);
      setInquiries(inquiries.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="admin_page_view">
      <div className="padding_global">
        <div className="container" style={{ padding: '80px 0 120px' }}>
          <div className="admin_header_row">
            <div>
              <div className="floating_text" style={{ marginBottom: '12px' }}>PORTFOLIO MANAGEMENT</div>
              <h1 className="heading_style_h2" style={{ color: '#ffffff', textTransform: 'uppercase' }}>
                ADMIN CONSOLE
              </h1>
            </div>

            <div className="admin_tab_switch">
              <button
                onClick={() => setActiveTab('inquiries')}
                className={`filter_pill ${activeTab === 'inquiries' ? 'is-active' : ''}`}
              >
                Inquiries ({inquiries.length})
              </button>
              <button
                onClick={() => setActiveTab('subscribers')}
                className={`filter_pill ${activeTab === 'subscribers' ? 'is-active' : ''}`}
              >
                Subscribers ({subscribers.length})
              </button>
            </div>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#a1a1aa' }}>
              Loading data...
            </div>
          ) : (
            <>
              {activeTab === 'inquiries' && (
                <div className="admin_table_container">
                  {inquiries.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '60px 0', color: '#71717a' }}>
                      No inquiries received yet. Submit a test message on the <a href="/contact-us" style={{ color: '#ab9bff' }}>Contact page</a>.
                    </div>
                  ) : (
                    <div className="inquiries_grid">
                      {inquiries.map((inq) => (
                        <div key={inq.id} className="inquiry_card">
                          <div className="inquiry_card_top">
                            <span className="inquiry_type_pill">{inq.type}</span>
                            <span className="inquiry_date">
                              {new Date(inq.createdAt).toLocaleDateString()}
                            </span>
                          </div>

                          <h3 className="inquiry_sender">{inq.name}</h3>
                          <div className="inquiry_contact_row">
                            <a href={`mailto:${inq.email}`} className="inquiry_link">{inq.email}</a>
                            {inq.phone && <span>• {inq.phone}</span>}
                            {inq.company && <span>• {inq.company}</span>}
                          </div>

                          {inq.projectType && inq.projectType !== 'Not specified' && (
                            <div className="inquiry_scope_row">
                              <span className="scope_badge">Type: {inq.projectType}</span>
                              <span className="scope_badge">Budget: {inq.budget}</span>
                            </div>
                          )}

                          <p className="inquiry_message">{inq.message}</p>

                          <div className="inquiry_card_actions">
                            <button
                              onClick={() => handleDelete(inq.id)}
                              className="delete_inquiry_btn"
                              title="Delete inquiry"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'subscribers' && (
                <div className="admin_table_container">
                  {subscribers.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '60px 0', color: '#71717a' }}>
                      No newsletter subscribers yet.
                    </div>
                  ) : (
                    <div className="subscribers_list">
                      {subscribers.map((sub) => (
                        <div key={sub.id} className="subscriber_row">
                          <span className="subscriber_email">{sub.email}</span>
                          <span className="subscriber_date">
                            Joined {new Date(sub.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
