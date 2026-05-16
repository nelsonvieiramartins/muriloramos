import { useState } from 'react';
import { PRESS } from '../data';

const PER_PAGE = 3;

function MediaPlaceholder() {
  return (
    <div style={{
      width: '100%',
      aspectRatio: '16/9',
      background: 'var(--hair)',
      border: '1px dashed var(--cream3)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      color: 'var(--cream3)',
      fontFamily: 'var(--mono)',
      fontSize: 10,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
    }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity=".5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
      Foto · Vídeo
    </div>
  );
}

function ArrowBtn({ onClick, dir }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 44, height: 44,
        background: 'transparent',
        border: '1px solid var(--amber)',
        color: 'var(--amber)',
        fontSize: 18,
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {dir === 'prev' ? '←' : '→'}
    </button>
  );
}

export default function Imprensa() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(PRESS.length / PER_PAGE);
  const visible = PRESS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section id="press" style={{ padding: '160px 56px', borderTop: '1px solid var(--hair)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, alignItems: 'flex-end', marginBottom: 60 }}>
        <div data-reveal style={{ '--rd': '0ms' }}>
          <div className="section-label">Depoimentos</div>
        </div>
        <h2 className="h-display" style={{ fontSize: 'clamp(48px, 6vw, 96px)', margin: 0 }}>
          Já <span className="em">disseram.</span>
        </h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <ArrowBtn onClick={prev} dir="prev" />

        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {visible.map((p, i) => (
            <div key={page * PER_PAGE + i} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <MediaPlaceholder />
              <div style={{ borderLeft: '1px solid var(--amber)', paddingLeft: 20 }}>
                <p style={{
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(15px, 1.4vw, 20px)',
                  lineHeight: 1.5,
                  color: 'var(--cream)',
                  margin: 0,
                }}>
                  {p.quote}
                </p>
                <div style={{
                  marginTop: 16,
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '.18em',
                  color: 'var(--cream3)',
                  textTransform: 'uppercase',
                }}>
                  {p.src} — {p.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        <ArrowBtn onClick={next} dir="next" />
      </div>

      {/* Indicadores de página */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 40 }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                width: i === page ? 28 : 8,
                height: 2,
                background: i === page ? 'var(--amber)' : 'var(--cream3)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'width .3s, background .3s',
              }}
            />
          ))}
        </div>
      )}

      <div style={{ marginTop: 60, display: 'flex', justifyContent: 'flex-end', gap: 16 }}>
        <a className="btn" data-cursor="link" href="#">Press kit · PDF ↗</a>
        <a className="btn" data-cursor="link" href="#">Fotos hi-res ↗</a>
      </div>
    </section>
  );
}
