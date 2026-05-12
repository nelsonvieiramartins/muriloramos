import { useState, useEffect, useCallback } from 'react';

// All photos are portrait (~2:3) — 3 cols per row, consistent row spans
const photos = [
  { img: '/assets/IVI_8936.jpg', l: 'Estúdio · 2024',  c: 'span 4', r: 'span 5' },
  { img: '/assets/IVI_8759.jpg', l: 'Live · São Paulo', c: 'span 4', r: 'span 5' },
  { img: '/assets/IVI_8976.jpg', l: 'Backstage · 02',   c: 'span 4', r: 'span 5' },
  { img: '/assets/IVI_9204.jpg', l: 'Gear · setup',     c: 'span 4', r: 'span 5' },
  { img: '/assets/IVI_8842.jpg', l: 'Curitiba · 2024',  c: 'span 4', r: 'span 5' },
  { img: '/assets/IVI_8460.jpg', l: 'Arquivo visual',   c: 'span 4', r: 'span 5' },
];

export default function Galeria() {
  const [lb, setLb] = useState(null);

  const close = useCallback(() => setLb(null), []);
  const prev  = useCallback(() => setLb(i => (i - 1 + photos.length) % photos.length), []);
  const next  = useCallback(() => setLb(i => (i + 1) % photos.length), []);

  useEffect(() => {
    if (lb === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lb, close, prev, next]);

  return (
    <>
      <section id="galeria" style={{ padding: '160px 56px', borderTop: '1px solid var(--hair)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60 }}>
          <div>
            <div data-reveal style={{ '--rd': '0ms' }}>
              <div className="section-label" style={{ marginBottom: 24 }}>V. — Galeria</div>
            </div>
            <h2 className="h-display" style={{ fontSize: 'clamp(48px, 6.5vw, 110px)', margin: 0 }}>
              Atrás <span className="em">das cortinas.</span>
            </h2>
          </div>
          <a className="btn" data-cursor="link" href="#">Press kit ↗</a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: '90px',
          gap: 12,
        }}>
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setLb(i)}
              className="ph-img"
              data-cursor="view"
              data-cursor-label="ampliar"
              data-reveal
              style={{
                '--rd': `${i * 80}ms`,
                gridColumn: p.c,
                gridRow: p.r,
                display: 'block',
                width: '100%',
                border: 'none',
                padding: 0,
                cursor: 'none',
              }}
              aria-label={`Ampliar: ${p.l}`}
            >
              <img src={p.img} alt={p.l} style={{ filter: 'grayscale(.15) contrast(1.05)' }} />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lb !== null && (
        <div
          onClick={close}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.93)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(8px)',
          }}
        >
          <img
            src={photos[lb].img}
            alt={photos[lb].l}
            onClick={e => e.stopPropagation()}
            style={{
              maxHeight: '88vh',
              maxWidth: '70vw',
              objectFit: 'contain',
              boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
            }}
          />

          {/* Caption */}
          <div style={{
            position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
            fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.22em',
            color: 'var(--cream3)', textTransform: 'uppercase', whiteSpace: 'nowrap',
          }}>
            {photos[lb].l} &nbsp;·&nbsp; {lb + 1} / {photos.length}
          </div>

          {/* Close */}
          <button onClick={close} style={{
            position: 'absolute', top: 28, right: 36,
            background: 'none', border: 'none', color: 'var(--cream2)',
            fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.2em',
            cursor: 'none', textTransform: 'uppercase', padding: 0,
          }}>✕ fechar</button>

          {/* Prev */}
          <button onClick={e => { e.stopPropagation(); prev(); }} style={{
            position: 'absolute', left: 32, top: '50%', transform: 'translateY(-50%)',
            background: 'none', border: '1px solid var(--hair-strong)',
            color: 'var(--cream)', width: 48, height: 48, borderRadius: '50%',
            fontSize: 18, cursor: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>←</button>

          {/* Next */}
          <button onClick={e => { e.stopPropagation(); next(); }} style={{
            position: 'absolute', right: 32, top: '50%', transform: 'translateY(-50%)',
            background: 'none', border: '1px solid var(--hair-strong)',
            color: 'var(--cream)', width: 48, height: 48, borderRadius: '50%',
            fontSize: 18, cursor: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>→</button>
        </div>
      )}
    </>
  );
}
