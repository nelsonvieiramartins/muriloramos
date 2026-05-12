import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -4% 0px' }
    );

    function attach() {
      document.querySelectorAll('[data-reveal]:not([data-rv-init])').forEach((el) => {
        el.setAttribute('data-rv-init', '1');
        io.observe(el);
      });
    }

    attach();

    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      // clear init flags so elements can be re-observed on remount
      document.querySelectorAll('[data-rv-init]').forEach((el) => {
        el.removeAttribute('data-rv-init');
      });
    };
  }, []);
}

export function useParallax() {
  useEffect(() => {
    let rafId = 0;
    const items = [];

    function index() {
      items.length = 0;
      document.querySelectorAll('[data-parallax]').forEach((el) => {
        items.push({ el, speed: parseFloat(el.getAttribute('data-parallax')) });
      });
    }

    function onScroll() {
      for (const p of items) {
        const rect = p.el.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          const off = (rect.top + rect.height / 2 - window.innerHeight / 2) * p.speed;
          p.el.style.transform = `translate3d(0, ${off}px, 0)`;
        }
      }
    }

    const handler = () => {
      if (!rafId) rafId = requestAnimationFrame(() => { onScroll(); rafId = 0; });
    };

    window.addEventListener('scroll', handler, { passive: true });

    const mo = new MutationObserver(() => { index(); onScroll(); });
    mo.observe(document.body, { childList: true, subtree: true });
    index();

    return () => {
      window.removeEventListener('scroll', handler);
      mo.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}

export function useHeroLoad() {
  useEffect(() => {
    const t = setTimeout(() => document.body.classList.add('hero-loaded'), 80);
    return () => {
      clearTimeout(t);
      document.body.classList.remove('hero-loaded');
    };
  }, []);
}
