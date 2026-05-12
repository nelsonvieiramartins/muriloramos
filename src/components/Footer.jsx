export default function Footer() {
  return (
    <footer>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 60, alignItems: 'flex-end' }}>
        <div>
          <img src="/assets/logo_color.webp" alt="Murilo Ramos" style={{ height: 'clamp(48px, 7vw, 100px)', width: 'auto', display: 'block' }} />
        </div>
        <div style={{ textAlign: 'right', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.2em', color: 'var(--cream3)', textTransform: 'uppercase', lineHeight: 1.9 }}>
          <div>© 2026 — São Paulo · BR</div>
          <div>themuriloramos.com</div>
          <div style={{ marginTop: 8 }}>
            <a href="mailto:booking@muriloramos.com" data-cursor="link" style={{ color: 'var(--amber)' }}>
              booking@muriloramos.com ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
