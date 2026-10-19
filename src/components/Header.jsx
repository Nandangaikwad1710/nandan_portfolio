import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';

      gsap.fromTo(
        '.canvas_menu_link',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.05, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo(
        '.canvas_menu_bottom',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out', delay: 0.35 }
      );

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header id="main-nav" role="banner" className="navigation w-nav">
        <div className="navigation_wrapper">
          <Link to="/" onClick={closeMenu} className="brand w-nav-brand" aria-label="Nandan Gaikwad Portfolio">
            <p className="logo_text">// NANDAN</p>
          </Link>

          <nav role="navigation" className="nav_menu w-nav-menu">
            <div className="nav_menu_wrapper">
              <Link 
                to="/about-us" 
                className={`nav_link w-inline-block ${isActive('/about-us') ? 'w--current' : ''}`}
              >
                <div className="nav_link_circle"></div>
                <div className="nav_link_text_wrap">
                  <p className="nav_link_text">About</p>
                  <p className="nav_link_text _2">About</p>
                </div>
              </Link>

              <Link 
                to="/projects" 
                className={`nav_link w-inline-block ${isActive('/projects') ? 'w--current' : ''}`}
              >
                <div className="nav_link_circle"></div>
                <div className="nav_link_text_wrap">
                  <p className="nav_link_text">Works</p>
                  <p className="nav_link_text _2">Works</p>
                </div>
              </Link>

              <Link 
                to="/service" 
                className={`nav_link w-inline-block ${isActive('/service') ? 'w--current' : ''}`}
              >
                <div className="nav_link_circle"></div>
                <div className="nav_link_text_wrap">
                  <p className="nav_link_text">Services</p>
                  <p className="nav_link_text _2">Services</p>
                </div>
              </Link>

              <Link 
                to="/contact-us" 
                className={`nav_link w-inline-block ${isActive('/contact-us') ? 'w--current' : ''}`}
              >
                <div className="nav_link_circle"></div>
                <div className="nav_link_text_wrap">
                  <p className="nav_link_text">Contact</p>
                  <p className="nav_link_text _2">Contact</p>
                </div>
              </Link>
            </div>
          </nav>

          <div
            data-menu-icon=""
            onClick={() => setIsMenuOpen(true)}
            className="hamburger_menu_icon"
            role="button"
            tabIndex={0}
            aria-label="Open navigation menu"
            onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(true)}
          >
            <div data-menu-inner="" className="hamburger_menu_inner">
              <div data-menu-line="" className="hamburger_menu_icon_line"></div>
              <div data-menu-line="" className="hamburger_menu_icon_line is-middle"></div>
              <div data-menu-line="" className="hamburger_menu_icon_line"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Off-canvas Full Screen Menu Panel */}
      <div 
        className={`canvas_menu ${isMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div 
          className="canvas_menu_element"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="canvas_logo_wrapper">
            <p className="canvas_logo">NANDAN GAIKWAD</p>
            <div className="floating_text is-canvas">Computer Science &amp; Engineering • Full-Stack Developer</div>
          </div>

          <div className="canvas_menu_wrapper">
            <Link 
              to="/" 
              onClick={closeMenu} 
              className={`canvas_menu_link w-inline-block ${location.pathname === '/' ? 'w--current' : ''}`}
            >
              <div className="canvas_menu_active_bg"></div>
              <div className="canvas_menu_border_line"></div>
              <div className="canvas_menu_text">
                <div data-menu-text="" className="heading-style-h4 is-menu">Home</div>
                <div data-menu-text="" className="heading-style-h4 is-menu hidden">Home</div>
              </div>
            </Link>

            <Link 
              to="/about-us" 
              onClick={closeMenu} 
              className={`canvas_menu_link w-inline-block ${isActive('/about-us') ? 'w--current' : ''}`}
            >
              <div className="canvas_menu_active_bg"></div>
              <div className="canvas_menu_border_line"></div>
              <div className="canvas_menu_text">
                <div data-menu-text="" className="heading-style-h4 is-menu">About</div>
                <div data-menu-text="" className="heading-style-h4 is-menu hidden">About</div>
              </div>
            </Link>

            <Link 
              to="/projects" 
              onClick={closeMenu} 
              className={`canvas_menu_link w-inline-block ${isActive('/projects') ? 'w--current' : ''}`}
            >
              <div className="canvas_menu_active_bg"></div>
              <div className="canvas_menu_border_line"></div>
              <div className="canvas_menu_text">
                <div data-menu-text="" className="heading-style-h4 is-menu">Projects</div>
                <div data-menu-text="" className="heading-style-h4 is-menu hidden">Projects</div>
              </div>
            </Link>

            <Link 
              to="/service" 
              onClick={closeMenu} 
              className={`canvas_menu_link w-inline-block ${isActive('/service') ? 'w--current' : ''}`}
            >
              <div className="canvas_menu_active_bg"></div>
              <div className="canvas_menu_border_line"></div>
              <div className="canvas_menu_text">
                <div data-menu-text="" className="heading-style-h4 is-menu">Stack</div>
                <div data-menu-text="" className="heading-style-h4 is-menu hidden">Stack</div>
              </div>
            </Link>

            <Link 
              to="/blogs" 
              onClick={closeMenu} 
              className={`canvas_menu_link w-inline-block ${isActive('/blogs') || isActive('/post') ? 'w--current' : ''}`}
            >
              <div className="canvas_menu_active_bg"></div>
              <div className="canvas_menu_border_line"></div>
              <div className="canvas_menu_text">
                <div data-menu-text="" className="heading-style-h4 is-menu">Journal</div>
                <div data-menu-text="" className="heading-style-h4 is-menu hidden">Journal</div>
              </div>
            </Link>

            <Link 
              to="/contact-us" 
              onClick={closeMenu} 
              className={`canvas_menu_link w-inline-block ${isActive('/contact-us') ? 'w--current' : ''}`}
            >
              <div className="canvas_menu_active_bg"></div>
              <div className="canvas_menu_border_line"></div>
              <div className="canvas_menu_text">
                <div data-menu-text="" className="heading-style-h4 is-menu">Contact</div>
                <div data-menu-text="" className="heading-style-h4 is-menu hidden">Contact</div>
              </div>
            </Link>
          </div>

          <div className="canvas_menu_bottom">
            <a href="mailto:gaikwad.nandanv@gmail.com" className="link-primary text-18px">
              gaikwad.nandanv@gmail.com
            </a>

            <div className="hero_social_links">
              <p className="text-weight-medium color-white">Connect</p>
              <div className="hero_social_line"></div>
              <div className="hero_social_icon_wrapper">
                <a href="https://github.com/Nandangaikwad1710" target="_blank" rel="noreferrer" className="hero_social_icon_link w-inline-block" aria-label="GitHub">
                  <div className="hero_social_icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="white"/>
                    </svg>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/nandan-gaikwad-157a4a245" target="_blank" rel="noreferrer" className="hero_social_icon_link w-inline-block" aria-label="LinkedIn">
                  <div className="hero_social_icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66A1.66 1.66 0 0 0 7.83 6.2z" fill="white"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <a href="tel:+918446545470" className="link-primary text-18px">+91 8446545470</a>
          </div>

          <div
            className="hamburger_menu_icon is-close"
            onClick={closeMenu}
            role="button"
            tabIndex={0}
            aria-label="Close menu"
            onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
          >
            <div className="hamburger_menu_inner is-close">
              <div className="hamburger_close_menu_icon_line"></div>
              <div className="hamburger_close_menu_icon_line is-close-middle"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
