export default function MarqueeBar() {
  const items = [
    'Cinzas que Falam — 2024',
    'Em turnê · 2026',
    'Novo single em breve',
    'Aulas abertas no canal',
    'Bookings 2026',
    'Press kit · disponível',
  ];
  const all = [...items, ...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {all.map((t, i) => (
          <span key={i}>
            <span className="dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
