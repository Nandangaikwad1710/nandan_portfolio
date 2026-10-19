import React, { useEffect } from 'react';
import gsap from 'gsap';
import { teamMembers, awardsData, timelineData } from '../data/siteData';
import CTASection from '../components/CTASection';

export default function AboutPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        '.about_page_hero_title',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.1 }
      );
      gsap.fromTo(
        '.about_stat_card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
      );

      // Section animations
      gsap.utils.toArray('.about_fade_up').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%'
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="about_page_view">
      {/* Editorial Hero */}
      <section className="about_hero_section">
        <div className="padding_global">
          <div className="container">
            <div className="about_hero_content">
              <div className="floating_text is-hero-sub" style={{ alignSelf: 'flex-start', marginBottom: '24px' }}>
                ABOUT NANDAN GAIKWAD
              </div>
              <h1 className="about_page_hero_title">
                COMPUTER SCIENCE &amp; ENGINEERING UNDERGRADUATE, FULL-STACK DEVELOPER &amp; CO-FOUNDER
              </h1>
              <p className="about_hero_subtitle">
                I am a Computer Science &amp; Engineering undergraduate at D Y Patil Agricultural and Technical University, building full-stack applications, AI-powered systems, and software products.
              </p>
            </div>

            {/* Studio Metric Cards */}
            <div className="about_stats_grid">
              <div className="about_stat_card">
                <span className="stat_number">400+</span>
                <span className="stat_label">Customers Served</span>
                <p className="stat_desc">Through tailored software solutions contributed to via FlyFour Infotech.</p>
              </div>
              <div className="about_stat_card">
                <span className="stat_number">5+</span>
                <span className="stat_label">National Hackathons</span>
                <p className="stat_desc">Including Smart India Hackathon participation and collaborative builds.</p>
              </div>
              <div className="about_stat_card">
                <span className="stat_number">20+</span>
                <span className="stat_label">Technical Events</span>
                <p className="stat_desc">Organized through Code Wizards Coding Club for ~200 technical members.</p>
              </div>
              <div className="about_stat_card">
                <span className="stat_number">8.4</span>
                <span className="stat_label">Current CGPA</span>
                <p className="stat_desc">B.Tech Computer Science &amp; Engineering, targeting 9.0+ graduation CGPA.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Statement & Big Visual */}
      <section className="about_statement_section about_fade_up">
        <div className="padding_global">
          <div className="container">
            <div className="statement_grid">
              <div className="statement_left">
                <div className="floating_text" style={{ marginBottom: '16px' }}>CORE PHILOSOPHY</div>
                <h2 className="heading-style-h2" style={{ color: '#ffffff', textTransform: 'uppercase' }}>
                  TURNING REAL-WORLD PROBLEMS INTO PRACTICAL SOFTWARE
                </h2>
              </div>
              <div className="statement_right">
                <p className="text-18px" style={{ color: '#a1a1aa', lineHeight: 1.7, marginBottom: '24px' }}>
                  I am also the Co-Founder of FlyFour Infotech, where I have contributed to software solutions delivered to more than 400 customers. I work directly with clients to understand business rules and translate them into reliable software architectures.
                </p>
                <p className="text-18px" style={{ color: '#a1a1aa', lineHeight: 1.7 }}>
                  I enjoy turning real-world problems into practical software and exploring technologies across AI, cloud computing, distributed systems, and automotive software. I am also preparing to pursue a Master's degree in Germany.
                </p>
              </div>
            </div>

            <div className="about_visual_banner" style={{ marginTop: '60px' }}>
              <img
                src="/images/hero.jpg"
                alt="Nandan Gaikwad Engineering Philosophy"
                className="image-cover"
                style={{ borderRadius: '24px', maxHeight: '550px', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="about_history_section about_fade_up" style={{ padding: '120px 0' }}>
        <div className="padding_global">
          <div className="container">
            <div className="section_header" style={{ marginBottom: '60px' }}>
              <div className="floating_text" style={{ marginBottom: '16px' }}>ACADEMIC &amp; TECH JOURNEY</div>
              <h2 className="heading_style_h2" style={{ color: '#ffffff', textTransform: 'uppercase' }}>
                MILESTONES OF CONTINUOUS GROWTH
              </h2>
            </div>

            <div className="about_timeline_grid">
              {timelineData.map((item, idx) => (
                <div key={idx} className="timeline_card_v2" style={{ borderLeft: `3px solid ${item.badgeBg}` }}>
                  <div className="timeline_year_tag" style={{ color: item.badgeBg }}>
                    {item.year}
                  </div>
                  <div className="timeline_badge_pill" style={{ backgroundColor: item.badgeBg, color: '#000000' }}>
                    {item.badge}
                  </div>
                  <p className="timeline_text_v2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team / Expert Members -> Experience & Leadership */}
      <section className="about_team_section about_fade_up" style={{ paddingBottom: '120px' }}>
        <div className="padding_global">
          <div className="container">
            <div className="section_header" style={{ marginBottom: '60px' }}>
              <div className="floating_text" style={{ marginBottom: '16px' }}>EXPERIENCE &amp; LEADERSHIP</div>
              <h2 className="heading_style_h2" style={{ color: '#ffffff', textTransform: 'uppercase' }}>
                ROLES &amp; TECHNICAL INITIATIVES
              </h2>
            </div>

            <div className="team_grid">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="team_card">
                  <div className="team_avatar_wrap">
                    <img src={member.image} alt={member.name} className="image-cover" />
                  </div>
                  <div className="team_info">
                    <h3 className="team_name">{member.name}</h3>
                    <p className="team_role">{member.role}</p>
                    <p className="team_bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="about_awards_section about_fade_up" style={{ paddingBottom: '120px' }}>
        <div className="padding_global">
          <div className="container">
            <div className="section_header" style={{ marginBottom: '40px' }}>
              <div className="floating_text" style={{ marginBottom: '16px' }}>CREDENTIALS &amp; HONORS</div>
              <h2 className="heading_style_h2" style={{ color: '#ffffff', textTransform: 'uppercase' }}>
                CERTIFICATIONS &amp; ACHIEVEMENTS
              </h2>
            </div>

            <div className="awards_table">
              {awardsData.map((award, idx) => (
                <div key={idx} className="award_row">
                  <div className="award_year">{award.year}</div>
                  <div className="award_title">{award.title}</div>
                  <div className="award_org">{award.org}</div>
                  <div className="award_project">{award.project}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <CTASection />
    </div>
  );
}
