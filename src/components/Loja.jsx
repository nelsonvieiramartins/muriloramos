import { MERCH } from '../data';

export default function Loja() {
  return (
    <section id="loja" style={{ padding: '160px 56px', borderTop: '1px solid var(--hair)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60 }}>
        <div>
          <div data-reveal style={{ '--rd': '0ms' }}>
            <div className="section-label" style={{ marginBottom: 24 }}>VIII. — Loja</div>
          </div>
          <h2 className="h-display" style={{ fontSize: 'clamp(48px, 6.5vw, 110px)', margin: 0 }}>
            <span className="em">Produtos personalizados.</span>
          </h2>
        </div>
        <a className="btn" data-cursor="link" href="#">Ver tudo ↗</a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {MERCH.map((m, i) => (
          <a
            key={m.id}
            href="#"
            className="album"
            data-cursor="open"
            data-cursor-label="comprar"
            data-reveal
            style={{ '--rd': `${i * 120}ms`, color: 'inherit', display: 'block' }}
          >
            <div className="cover" style={{ aspectRatio: '4/5' }}>
              {m.img
                ? <img src={m.img} alt={m.title} />
                : <div className="ph" />
              }
              <div className="lbl">{m.tag}</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 14 }}>
              <div className="ttl" style={{ fontSize: 24 }}>{m.title}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--amber)', letterSpacing: '.12em' }}>{m.price}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
