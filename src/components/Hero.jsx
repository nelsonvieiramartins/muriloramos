export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', paddingTop: 0, background: '#000' }}>
      {/* Background video */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <video
          src="/assets/fundo2.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute', right: 0, top: '50%',
            transform: 'translateY(-50%)', height: '100%',
            width: 'auto',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 70% 50%, transparent 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.85) 80%)',
        }} />
      </div>

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 16%, transparent 70%, rgba(0,0,0,0.95) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: '120px 56px 80px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        minHeight: '100vh',
      }}>
        <div className="hero-fade d2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        </div>

        <div>
          <div className="hero-fade" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ width: 40, height: 1, background: 'var(--amber)', display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.3em', color: 'var(--amber)', textTransform: 'uppercase' }}>
              Música · Educação · Tanatopraxia
            </span>
          </div>

          <img
            src="/assets/logo_color.webp"
            alt="Murilo Ramos"
            className="hero-fade"
            style={{ height: 'clamp(200px, 30vw, 480px)', width: 'auto', display: 'block' }}
          />

          <div className="hero-fade d3" style={{ marginTop: 42, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, maxWidth: 980 }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 26, fontStyle: 'italic', lineHeight: 1.35, color: 'var(--cream)', margin: 0, fontWeight: 300 }}>
              Baixista, professor, tanatopraxista — três ofícios, uma mesma escuta. O que se faz com as mãos quando o silêncio chega.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignSelf: 'end' }}>
              <a className="btn solid" data-cursor="play" data-cursor-label="ouvir agora" href="#musica">
                <span className="eq"><i/><i/><i/><i/><i/></span>
                Ouvir Cinzas que Falam
              </a>
              <a className="btn" data-cursor="link" href="#agenda">Próximos shows ↗</a>
            </div>
          </div>
        </div>

        <div className="hero-fade d4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.3em', color: 'var(--cream3)', textTransform: 'uppercase' }}>
            <span style={{ width: 18, height: 1, background: 'var(--cream3)', display: 'inline-block' }} />
            ROL · DESCER · ROL · DESCER
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.3em', color: 'var(--cream3)', textTransform: 'uppercase' }}>
            01 / 12
          </div>
        </div>
      </div>
    </section>
  );
}
