import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { blogsData } from '../data/siteData';
import CTASection from '../components/CTASection';

const CATEGORIES = ['ALL', 'TECH & AI', 'INSPIRATION', 'AWARDS'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  useEffect(() => {
    gsap.fromTo(
      '.blog_hero_title',
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
    );
    gsap.fromTo(
      '.blog_card_item',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  const featuredPost = blogsData[0];
  const filteredPosts = blogsData.filter((post) => {
    if (activeCategory === 'ALL') return true;
    return (post.category || '').toUpperCase() === activeCategory;
  });

  return (
    <div className="blog_page_view">
      {/* Editorial Hero */}
      <section className="blog_hero_section">
        <div className="padding_global">
          <div className="container">
            <div className="blog_hero_header">
              <div className="floating_text" style={{ marginBottom: '20px' }}>
                JOURNAL &amp; PERSPECTIVES
              </div>
              <h1 className="blog_hero_title">
                TECHNICAL DISPATCHES, AI NOTES &amp; ENGINEERING ESSAYS
              </h1>
              <p className="blog_hero_subtitle">
                Reflections on real-time motorsport telemetry, autonomous AI agents, enterprise software architecture, and the future of intelligent mobility in Germany.
              </p>
            </div>

            {/* Featured Post Spotlight */}
            {featuredPost && (
              <div className="featured_post_banner">
                <Link
                  to={`/post/${featuredPost.slug}`}
                  className="featured_post_grid w-inline-block"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="featured_post_media">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="image-cover featured_post_img"
                    />
                    <span className="featured_tag_badge">FEATURED ARTICLE</span>
                  </div>
                  <div className="featured_post_content">
                    <div className="post_meta_row">
                      <span className="post_category">{featuredPost.category}</span>
                      <span className="post_dot">•</span>
                      <span className="post_date">{featuredPost.date}</span>
                      <span className="post_dot">•</span>
                      <span className="post_read">{featuredPost.readTime}</span>
                    </div>
                    <h2 className="featured_post_title">{featuredPost.title}</h2>
                    <p className="featured_post_snippet">{featuredPost.snippet}</p>

                    <div className="author_signature_row">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="author_avatar"
                      />
                      <div>
                        <span className="author_name">{featuredPost.author.name}</span>
                        <span className="author_role">{featuredPost.author.role}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Category Filter Pills */}
            <div className="project_filter_bar" style={{ marginTop: '60px' }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter_pill ${activeCategory === cat ? 'is-active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="blog_grid">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/post/${post.slug}`}
                  className="blog_card_item w-inline-block"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="blog_card_media">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="image-cover blog_card_img"
                      loading="lazy"
                    />
                    <div className="blog_card_category_pill">{post.category}</div>
                  </div>

                  <div className="blog_card_info">
                    <div className="post_meta_row">
                      <span className="post_date">{post.date}</span>
                      <span className="post_dot">•</span>
                      <span className="post_read">{post.readTime}</span>
                    </div>
                    <h3 className="blog_card_title">{post.title}</h3>
                    <p className="blog_card_snippet">{post.snippet}</p>

                    <div className="blog_card_arrow_row">
                      <span>Read Story</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </Link>
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
