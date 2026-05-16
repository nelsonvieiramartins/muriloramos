import { FACETS } from '../data';
import Words from './Words';

export default function Facets() {
  return (
    <section id="facetas" style={{ padding: '140px 56px', position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, marginBottom: 80 }}>
        <div data-reveal style={{ '--rd': '0ms' }}>
          <div className="section-label">Capítulo zero</div>
        </div>
        <h2 className="h-display" style={{ fontSize: 'clamp(56px, 8vw, 132px)', margin: 0 }}>
          <Words text="Três trajetórias," />
          <br />
          <span className="em" style={{ fontStyle: 'italic' }}>
            <Words text="um só profissional." delay={120} />
          </span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {FACETS.map((f, i) => (
          <a
            key={f.key}
            href={`#${f.key === 'musica' ? 'musica' : f.key === 'biologia' ? 'aulas' : 'tanato'}`}
            className="facet-card"
            data-cursor="open"
            data-cursor-label={`abrir · ${f.title}`}
            data-reveal
            style={{ '--rd': `${i * 140}ms`, color: 'inherit' }}
          >
            <div className="num">{f.kicker} — {String(i + 1).padStart(2, '0')}</div>
            <div>
              <div className="t" style={{ fontStyle: i !== 1 ? 'italic' : 'normal' }}>{f.title}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.18em', color: 'var(--cream2)', textTransform: 'uppercase', marginTop: 18 }}>
                {f.sub}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
