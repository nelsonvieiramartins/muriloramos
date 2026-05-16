import { VIDEOS } from '../data';

const [featured, ...rest] = VIDEOS;

export default function Videos() {
  return (
    <section id="videos" style={{ padding: '160px 56px', borderTop: '1px solid var(--hair)' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, gap: 40 }}>
        <div>
          <div data-reveal style={{ '--rd': '0ms' }}>
            <div className="section-label" style={{ marginBottom: 24 }}>IV. — Vídeos & clipes</div>
          </div>
          <h2 className="h-display" style={{ fontSize: 'clamp(48px, 7vw, 120px)', margin: 0 }}>
            Ao vivo e em <span className="em">estúdio.</span>
          </h2>
        </div>
        <a className="btn" data-cursor="link" href="#">Canal completo ↗</a>
      </div>

      {/* Featured video — thumb left, info right */}
      <div data-reveal style={{ '--rd': '0ms', display: 'grid', gridTemplateColumns: '3fr 1.2fr', gap: 40, alignItems: 'center', marginBottom: 14 }}>

        <a
          href="#"
          className="vthumb"
          data-cursor="play"
          data-cursor-label="play"
          style={{ display: 'block', aspectRatio: '16/9' }}
        >
          {featured.img
            ? <img src={featured.img} alt={featured.title} />
            : <div className="ph" />
          }
          <div className="play">▶</div>
          <div className="meta">
            <span>{featured.kind}</span><span>{featured.dur}</span>
          </div>
        </a>

        {/* Info panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <a href="#" className="btn" data-cursor="link" style={{ alignSelf: 'flex-start', marginTop: 4 }}>
            Assistir ↗
          </a>
        </div>
      </div>

      {/* Smaller videos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {rest.map((v, i) => (
          <div key={v.id} data-reveal style={{ '--rd': `${(i + 1) * 100}ms` }}>
            <a
              href="#"
              className="vthumb"
              data-cursor="play"
              data-cursor-label="play"
              style={{ display: 'block', aspectRatio: '16/10' }}
            >
              {v.img
                ? <img src={v.img} alt={v.title} />
                : <div className="ph" />
              }
              <div className="play" style={{ width: 52, height: 52, fontSize: 18 }}>▶</div>
              <div className="meta">
                <span>{v.kind}</span><span>{v.dur}</span>
              </div>
            </a>

          </div>
        ))}
      </div>

    </section>
  );
}
