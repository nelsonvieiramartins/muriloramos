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

    let triggered  = false;
    let anchorSkip = false;

    const stopEvent = (e) => e.preventDefault();
    const stopKey   = (e) => {
      if ([' ', 'ArrowDown', 'ArrowUp', 'PageDown', 'PageUp'].includes(e.key))
        e.preventDefault();
    };

    const lockScroll = () => {
      document.documentElement.style.overflow = 'hidden'; // locks html — scrollbar-gutter:stable keeps the space
      window.addEventListener('wheel',     stopEvent, { passive: false });
      window.addEventListener('touchmove', stopEvent, { passive: false });
      window.addEventListener('keydown',   stopKey,   { passive: false });
    };

    const unlockScroll = () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('wheel',     stopEvent);
      window.removeEventListener('touchmove', stopEvent);
      window.removeEventListener('keydown',   stopKey);
    };

    // Anchor navigation: skip lock, jump video to end
    const onHashChange = () => {
      anchorSkip = true;
      triggered  = true;
      unlockScroll();
      const setEnd = () => { video.currentTime = video.duration; };
      video.readyState >= 1 ? setEnd() : video.addEventListener('loadedmetadata', setEnd, { once: true });
      setTimeout(() => { anchorSkip = false; }, 600);
    };

    const onScroll = () => {
      const sectionTop = section.offsetTop;

      if (triggered && window.scrollY <= 0) {
        triggered  = false;
        anchorSkip = false;
        unlockScroll();
        video.pause();
        video.currentTime = 0;
        return;
      }

      if (triggered || anchorSkip) return;

      if (window.scrollY >= sectionTop) {
        triggered = true;
        document.documentElement.scrollTop = sectionTop;
        document.body.scrollTop = sectionTop;
        lockScroll();
        video.playbackRate = 1.6;
        video.play().catch(() => {});
      }
    };

    const onEnded = () => unlockScroll();

    video.addEventListener('ended', onEnded);
    window.addEventListener('scroll',     onScroll,     { passive: true });
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('scroll',     onScroll);
      window.removeEventListener('hashchange', onHashChange);
      video.removeEventListener('ended', onEnded);
      unlockScroll();
    };
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
