import { SHOWS } from '../data';

export default function Agenda() {
  return (
    <section id="agenda" style={{ padding: '160px 56px', borderTop: '1px solid var(--hair)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, alignItems: 'flex-end', marginBottom: 60 }}>
        <div data-reveal style={{ '--rd': '0ms' }}>
          <div className="section-label">III. — Em turnê</div>
        </div>
        <h2 className="h-display" style={{ fontSize: 'clamp(56px, 8vw, 140px)', margin: 0 }}>
          Próximas <span className="em">noites.</span>
        </h2>
      </div>

      <div style={{ borderTop: '1px solid var(--hair)' }}>
        {SHOWS.map((s, i) => (
          <div key={i} className="tour-row" data-reveal style={{ '--rd': `${i * 80}ms` }}>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 30, color: 'var(--amber)' }}>{s.date}</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--cream)' }}>{s.city}</div>
            <div style={{ fontFamily: 'var(--body)', fontSize: 14, color: 'var(--cream2)' }}>{s.venue}</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--cream3)', letterSpacing: '.18em', textTransform: 'uppercase' }}>{s.kind}</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              {s.status === 'tickets' && <a className="btn" data-cursor="link" href="#" style={{ padding: '12px 22px' }}>Ingressos</a>}
              {s.status === 'few'     && <a className="btn solid" data-cursor="link" href="#" style={{ padding: '12px 22px' }}>Últimos · 7</a>}
              {s.status === 'soon'    && <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--cream3)', letterSpacing: '.2em', textTransform: 'uppercase' }}>Em breve</span>}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--cream3)', letterSpacing: '.18em', textTransform: 'uppercase' }}>
        <span>06 datas confirmadas</span>
        <a href="#" data-cursor="link">Todas as datas ↗</a>
      </div>
    </section>
  );
}
