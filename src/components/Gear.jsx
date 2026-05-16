import { GEAR } from '../data';

export default function Gear() {
  return (
    <section id="gear" style={{ padding: '160px 56px', borderTop: '1px solid var(--hair)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, marginBottom: 60 }}>
        <div data-reveal style={{ '--rd': '0ms' }}>
          <div className="section-label">VI. — Setup</div>
        </div>
        <h2 className="h-display" style={{ fontSize: 'clamp(48px, 6vw, 100px)', margin: 0 }}>
          <span className="em">My Gear.</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {GEAR.map((g, i) => (
          <div
            key={g.cat}
            data-reveal
            style={{ '--rd': `${i * 120}ms`, padding: 24, borderTop: '1px solid var(--amber)', background: 'var(--bg2)' }}
          >
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.25em', color: 'var(--amber)', textTransform: 'uppercase', marginBottom: 24 }}>
              0{i + 1} · {g.cat}
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {g.items.map((it, j) => (
                <li
                  key={j}
                  style={{
                    padding: '14px 0',
                    borderBottom: j === g.items.length - 1 ? 'none' : '1px solid var(--hair)',
                    fontFamily: 'var(--serif)',
                    fontSize: 18,
                    fontStyle: 'italic',
                    color: 'var(--cream)',
                  }}
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
