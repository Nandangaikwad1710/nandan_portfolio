import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { blogsData } from '../data/siteData';
import CTASection from '../components/CTASection';

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const post = blogsData.find((b) => b.slug === slug || b.id === slug);

  useEffect(() => {
    if (!post) return;

    gsap.fromTo(
      '.article_title',
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
    );
    gsap.fromTo(
      '.article_meta_row',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo(
      '.article_hero_media',
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out', delay: 0.3 }
    );
  }, [post, slug]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!post) {
    return (
      <div className="padding_global" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
          <h1 className="heading_style_h2" style={{ color: '#ffffff', marginBottom: '16px' }}>Article Not Found</h1>
          <p className="text-18px" style={{ color: '#a1a1aa', marginBottom: '32px' }}>
            The article you are looking for does not exist or has been moved.
          </p>
          <button
            onClick={() => navigate('/blogs')}
            className="modal_cta_button"
            style={{ margin: '0 auto' }}
          >
            ← Back to All Articles
          </button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogsData.filter((b) => b.id !== post.id).slice(0, 2);

  return (
    <article className="blog_post_page_view">
      <section className="article_hero_section">
        <div className="padding_global">
          <div className="container is-narrow">
            <div className="article_category_pill">{post.category}</div>
            <h1 className="article_title">{post.title}</h1>

            <div className="article_meta_row">
              <div className="author_lockup">
                <img src={post.author.avatar} alt={post.author.name} className="author_avatar" />
                <div>
                  <p className="author_name">{post.author.name}</p>
                  <p className="author_role">{post.author.role}</p>
                </div>
              </div>
              <div className="article_stats">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="article_hero_media">
              <img src={post.image} alt={post.title} className="image-cover article_img" />
            </div>

            {/* Article Content Stream */}
            <div className="article_content_body">
              <p className="article_lead_paragraph">{post.snippet}</p>

              {post.sections && post.sections.map((sec, idx) => (
                <div key={idx} className="article_section_block">
                  <h2 className="article_subheading">{sec.heading}</h2>
                  <p className="article_paragraph">{sec.body}</p>
                </div>
              ))}

              <blockquote className="article_pull_quote">
                "Engineering is not merely about writing lines of code—it is about turning real-world problems into practical software and architectures that endure."
              </blockquote>

              {/* Share Controls */}
              <div className="article_share_box">
                <span className="share_label">Share This Article:</span>
                <div className="share_buttons">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="share_btn"
                  >
                    X (Twitter)
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="share_btn"
                  >
                    LinkedIn
                  </a>
                  <button onClick={handleCopyLink} className="share_btn">
                    {copied ? 'Copied ✓' : 'Copy Link'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="related_posts_section" style={{ padding: '80px 0 120px' }}>
        <div className="padding_global">
          <div className="container">
            <div className="section_header" style={{ marginBottom: '40px' }}>
              <div className="floating_text" style={{ marginBottom: '16px' }}>MORE TO READ</div>
              <h2 className="heading_style_h3" style={{ color: '#ffffff', textTransform: 'uppercase' }}>
                CONTINUE EXPLORING
              </h2>
            </div>

            <div className="blog_grid">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.id}
                  to={`/post/${rPost.slug}`}
                  className="blog_card_item w-inline-block"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="blog_card_media">
                    <img src={rPost.image} alt={rPost.title} className="image-cover" />
                    <div className="blog_card_category_pill">{rPost.category}</div>
                  </div>
                  <div className="blog_card_info">
                    <div className="post_meta_row">
                      <span className="post_date">{rPost.date}</span>
                      <span className="post_dot">•</span>
                      <span className="post_read">{rPost.readTime}</span>
                    </div>
                    <h3 className="blog_card_title">{rPost.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <CTASection />
    </article>
  );
}
