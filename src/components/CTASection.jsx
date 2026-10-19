import React from 'react';

export default function CTASection({ onContactClick }) {
  const ctaText = "Let’s Connect And Let’s Work Together";

  return (
    <>
      <section className="cta_section">
        {/* Top Row: Solid text ticker */}
        <div className="cta_ticker_row">
          <div className="cta_ticker_track">
            <h2 data-stroke="no" className="cta_ticker_text">{ctaText}</h2>
            <h2 data-stroke="no" className="cta_ticker_text">{ctaText}</h2>
            <h2 data-stroke="no" className="cta_ticker_text">{ctaText}</h2>
            <h2 data-stroke="no" className="cta_ticker_text">{ctaText}</h2>
          </div>
        </div>

        {/* Bottom Row: Outlined stroke text ticker moving smoothly */}
        <div className="cta_ticker_row _2">
          <div className="cta_ticker_track is-reverse">
            <h2 data-stroke="yes" className="cta_ticker_text is_stroke">{ctaText}</h2>
            <h2 data-stroke="yes" className="cta_ticker_text is_stroke">{ctaText}</h2>
            <h2 data-stroke="yes" className="cta_ticker_text is_stroke">{ctaText}</h2>
            <h2 data-stroke="yes" className="cta_ticker_text is_stroke">{ctaText}</h2>
          </div>
        </div>

        {/* Tactile Magnetic CTA Button */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            if (onContactClick) onContactClick();
            else {
              const el = document.querySelector('.footer');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="cta_button w-inline-block"
        >
          <div className="button_line_mask_wrapper">
            <div className="cta_button_line_mask"></div>
            <div className="cta_button_line_mask _2"></div>
            <div className="cta_button_line_mask _3"></div>
          </div>

          <div className="button_text_wrapper">
            <p className="cta_button_text">Let’s Contact</p>
            <p className="cta_button_text second_text">Let’s Contact</p>
          </div>

          <div className="cta_button_arrow">
            <div className="cta_button_icon_wrap">
              <div className="cta_button_icon">
                <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12C0.89542 12 0 12.8954 0 14C0 15.1046 0.89542 16 2 16L26.5214 16C25.4926 17.1468 24.1158 18.4373 22.6894 19.6757C21.2246 20.9475 19.7528 22.1272 18.6446 22.9921C18.0918 23.4234 16.9772 24.277 16.6562 24.5194C15.905 25.1997 15.7752 26.3516 16.3886 27.1854C17.0436 28.0744 18.2962 28.2654 19.1856 27.6112C19.5208 27.358 20.5336 26.5927 21.1054 26.1464C22.2472 25.2554 23.7756 24.0278 25.3106 22.6952C26.8354 21.3713 28.412 19.9035 29.623 18.5331C30.2264 17.8504 30.7824 17.145 31.1972 16.457C31.5792 15.8236 32 14.952 32 14L31.9804 13.6464C31.8946 12.8338 31.5312 12.0988 31.1972 11.5448C30.7824 10.8566 30.2264 10.1496 29.623 9.4666C28.4122 8.09621 26.8354 6.62861 25.3106 5.3046C23.7756 3.972 22.2472 2.74441 21.1054 1.85341C20.5336 1.40721 19.5208 0.641804 19.1856 0.388605C18.2962 -0.265795 17.0454 -0.0745943 16.3906 0.814406C15.7766 1.6482 15.9048 2.7998 16.6562 3.48041L17.3106 3.9824C17.6314 4.2248 18.0918 4.5764 18.6446 5.0076C19.7528 5.8726 21.2246 7.0522 22.6894 8.3242C24.1158 9.5626 25.4926 10.8528 26.5214 12L2 12Z" fill="white" />
                </svg>
              </div>
            </div>

            <div className="cta_button_icon_wrap">
              <div className="cta_button_icon second_arrow">
                <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12C0.89542 12 0 12.8954 0 14C0 15.1046 0.89542 16 2 16L26.5214 16C25.4926 17.1468 24.1158 18.4373 22.6894 19.6757C21.2246 20.9475 19.7528 22.1272 18.6446 22.9921C18.0918 23.4234 16.9772 24.277 16.6562 24.5194C15.905 25.1997 15.7752 26.3516 16.3886 27.1854C17.0436 28.0744 18.2962 28.2654 19.1856 27.6112C19.5208 27.358 20.5336 26.5927 21.1054 26.1464C22.2472 25.2554 23.7756 24.0278 25.3106 22.6952C26.8354 21.3713 28.412 19.9035 29.623 18.5331C30.2264 17.8504 30.7824 17.145 31.1972 16.457C31.5792 15.8236 32 14.952 32 14L31.9804 13.6464C31.8946 12.8338 31.5312 12.0988 31.1972 11.5448C30.7824 10.8566 30.2264 10.1496 29.623 9.4666C28.4122 8.09621 26.8354 6.62861 25.3106 5.3046C23.7756 3.972 22.2472 2.74441 21.1054 1.85341C20.5336 1.40721 19.5208 0.641804 19.1856 0.388605C18.2962 -0.265795 17.0454 -0.0745943 16.3906 0.814406C15.7766 1.6482 15.9048 2.7998 16.6562 3.48041L17.3106 3.9824C17.6314 4.2248 18.0918 4.5764 18.6446 5.0076C19.7528 5.8726 21.2246 7.0522 22.6894 8.3242C24.1158 9.5626 25.4926 10.8528 26.5214 12L2 12Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* Reversed Border */}
      <div data-wf--border--variant="reversed" className="border w-variant-reversed">
        <div className="border_line" style={{ backgroundColor: '#000' }}></div>
        <div className="border_line _2" style={{ backgroundColor: '#000' }}></div>
        <div className="border_line _3" style={{ backgroundColor: '#000' }}></div>
        <div className="border_line _4" style={{ backgroundColor: '#000' }}></div>
        <div className="border_line _5" style={{ backgroundColor: '#000' }}></div>
      </div>
    </>
  );
}
