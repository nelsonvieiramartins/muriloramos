import { COURSES } from '../data';

export default function Aulas() {
  return (
    <section id="aulas" style={{ padding: '160px 56px', borderTop: '1px solid var(--hair)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, gap: 40 }}>
        <div>
          <div data-reveal style={{ '--rd': '0ms' }}>
            <div className="section-label" style={{ marginBottom: 24 }}>VII. — Aulas & pedagogia</div>
          </div>
          <h2 className="h-display" style={{ fontSize: 'clamp(48px, 6.5vw, 110px)', margin: 0 }}>
            Quem <span className="em">ensina</span><br />continua aprendendo.
          </h2>
        </div>
        <div data-reveal style={{ '--rd': '300ms', maxWidth: 320, fontFamily: 'var(--body)', fontSize: 14, lineHeight: 1.7, color: 'var(--cream2)' }}>
          Trilha modular para baixistas e guitarristas, com aulões mensais de Biologia para vestibular.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
        {COURSES.map((c, i) => (
          <a
            key={c.id}
            href="#"
            className="facet-card"
            data-cursor="open"
            data-cursor-label="ver curso"
            data-reveal
            style={{ '--rd': `${i * 120}ms`, aspectRatio: 'auto', padding: 32, color: 'inherit' }}
          >
            <div className="num">CURSO · 0{i + 1}</div>
            <div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 38, color: 'var(--cream)', lineHeight: 1.05, marginTop: 24 }}>
                {c.title}
              </div>
              <div style={{ display: 'flex', gap: 24, marginTop: 24, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.18em', color: 'var(--cream2)', textTransform: 'uppercase' }}>
                <span>{c.dur}</span><span>{c.level}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
