import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () => {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Reusable text split and reveal
export function revealText(element, options = {}) {
  if (!element || prefersReducedMotion()) return;
  const { delay = 0, duration = 0.9, stagger = 0.08, y = 40 } = options;

  gsap.fromTo(
    element,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
}

// Fade/slide reveal for sections and cards
export function slideUpReveal(element, trigger = null, options = {}) {
  if (!element || prefersReducedMotion()) return;
  const { duration = 0.8, y = 35, delay = 0 } = options;

  gsap.fromTo(
    element,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    }
  );
}

// Image masked clip reveal with subtle scale down
export function revealImage(imgElement, trigger = null) {
  if (!imgElement || prefersReducedMotion()) return;

  gsap.fromTo(
    imgElement,
    { clipPath: 'inset(10% 0 10% 0)', scale: 1.12, opacity: 0.6 },
    {
      clipPath: 'inset(0% 0 0% 0)',
      scale: 1,
      opacity: 1,
      duration: 1.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: trigger || imgElement,
        start: 'top 80%',
      },
    }
  );
}
