import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const trailHost = document.getElementById('cursor-trail');
    if (!cursor || !trailHost) return;

    const GHOSTS = 6;
    const ghosts = [];

    for (let i = 0; i < GHOSTS; i++) {
      const g = document.createElement('div');
      g.className = 'ghost';
      g.style.opacity = String(0.55 - i * 0.08);
      g.style.transform = 'translate(-200px,-200px)';
      trailHost.appendChild(g);
      ghosts.push({ el: g, x: 0, y: 0 });
    }

    let mx = -200, my = -200, tx = mx, ty = my;
    let rafId;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    const onLeave = () => { cursor.style.opacity = '0'; };
    const onEnter = () => { cursor.style.opacity = '1'; };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);

    function tick() {
      tx += (mx - tx) * 0.22;
      ty += (my - ty) * 0.22;
      cursor.style.transform = `translate(${tx}px, ${ty}px) translate(-50%,-50%)`;

      let px = tx, py = ty;
      for (let i = 0; i < GHOSTS; i++) {
        const lerp = 0.22 - i * 0.028;
        ghosts[i].x += (px - ghosts[i].x) * lerp;
        ghosts[i].y += (py - ghosts[i].y) * lerp;
        ghosts[i].el.style.transform = `translate(${ghosts[i].x}px, ${ghosts[i].y}px) translate(-50%,-50%)`;
        px = ghosts[i].x;
        py = ghosts[i].y;
      }
      rafId = requestAnimationFrame(tick);
    }
    tick();

    const onOver = (e) => {
      const t = e.target.closest('[data-cursor]');
      if (t) {
        cursor.dataset.state = t.getAttribute('data-cursor');
        cursor.dataset.label = t.getAttribute('data-cursor-label') || '';
      } else {
        cursor.dataset.state = '';
        cursor.dataset.label = '';
      }
    };
    document.body.addEventListener('mouseover', onOver);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
      document.body.removeEventListener('mouseover', onOver);
      trailHost.innerHTML = '';
    };
  }, []);

  return null;
}
