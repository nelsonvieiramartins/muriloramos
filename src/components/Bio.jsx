import { useEffect, useRef } from 'react';
import Words from './Words';

const portrait = '/assets/IVI_8460.jpg';

const stats = [
  { n: '16',   l: 'Anos em cena'    },
  { n: '04',   l: 'Álbuns autorais' },
  { n: '120+', l: 'Shows · 2024'    },
];

export default function Bio() {
  const sectionRef = useRef(null);
  const videoRef   = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video   = videoRef.current;
    if (!section || !video) return;

    let triggered = false;

    const onScroll = () => {
      if (triggered) return;
      if (window.scrollY >= section.offsetTop) {
        triggered = true;
        video.playbackRate = 1.6;
        video.play().catch(() => {});
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="bio"
      style={{ position: 'relative', minHeight: '100vh', borderTop: '1px solid var(--hair)' }}
    >
      {/* Sticky container — stays in view while video plays */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>

        {/* Background video — right-aligned, natural aspect ratio */}
        <video
          ref={videoRef}
          src="/assets/quemsou.mp4"
          muted
          playsInline
          preload="auto"
          style={{
            position: 'absolute', right: 0, top: '50%',
            transform: 'translateY(-50%)',
            height: '100%', width: 'auto',
            zIndex: 0,
          }}
        />

        {/* Left-to-right gradient keeps text legible */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to right, var(--bg) 35%, rgba(10,9,8,0.6) 65%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        {/* Content — vertically centered */}
        <div style={{
          position: 'relative', zIndex: 2,
          padding: '80px 56px',
          height: '100%',
          display: 'flex', alignItems: 'center',
          boxSizing: 'border-box',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', width: '100%' }}>
            <div>
              <div data-reveal style={{ '--rd': '0ms' }}>
                <div className="section-label" style={{ marginBottom: 20 }}>I. — Sobre</div>
              </div>

              <h2 className="h-display" style={{ fontSize: 'clamp(36px, 5vw, 80px)', margin: '0 0 28px' }}>
                <Words text="Por trás" />
                <br />
                <span className="em"><Words text="da fumaça." delay={80} /></span>
              </h2>

              <div data-reveal style={{ '--rd': '200ms' }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 20, lineHeight: 1.4, color: 'var(--cream)', fontWeight: 300, margin: '0 0 18px', maxWidth: 560 }}>
                  Murilo Ramos é baixista, guitarrista, professor de Ciências e Biologia, e tanatopraxista profissional. As três práticas convivem pelo mesmo motivo: lidar com o que está por baixo da superfície.
                </p>
              </div>
              <div data-reveal style={{ '--rd': '300ms' }}>
                <p style={{ fontFamily: 'var(--body)', fontSize: 15, lineHeight: 1.65, color: 'var(--cream2)', margin: '0 0 18px', maxWidth: 520 }}>
                  Em 16 anos de estrada, gravou 4 álbuns autorais, dividiu palco com nomes do rock e do metal nacional, e construiu uma pedagogia musical baseada em escuta, leitura e ofício. Em paralelo, leciona biologia para o ensino médio e atua como tanatopraxista — o ofício do silêncio, que ensina a respeitar o tempo do outro.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 32, maxWidth: 520 }}>
                {stats.map((s, i) => (
                  <div key={s.l} className="stat" data-reveal style={{ '--rd': `${i * 140}ms` }}>
                    <div className="n">{s.n}</div>
                    <div className="l">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal="mask">
              <div data-parallax="-0.06" style={{ willChange: 'transform' }}>
                <div className="ph-img" style={{ aspectRatio: '4/5', maxHeight: '65vh' }}>
                  <img src={portrait} alt="Murilo Ramos" style={{ filter: 'grayscale(.2) contrast(1.05)' }} />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', color: 'var(--cream3)', textTransform: 'uppercase' }}>
                <span>Foto · Estúdio Cinzas</span><span>2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
