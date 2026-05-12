import { useState, useEffect } from 'react';
import { ALBUMS } from '../data';
import { useMusicContext } from '../MusicContext';

const OEMBED = (id) =>
  `https://open.spotify.com/oembed?url=https://open.spotify.com/album/${id}`;

export default function Discografia() {
  const firstWithSpotify            = ALBUMS.find(a => a.spotifyId);
  const [selectedId, setSelectedId] = useState(firstWithSpotify?.spotifyId ?? null);
  const [covers, setCovers]         = useState({});
  const { setNowPlaying }           = useMusicContext();

  // Fetch OEmbed cover art for all albums with a spotifyId
  useEffect(() => {
    ALBUMS.forEach(a => {
      if (!a.spotifyId) return;
      fetch(OEMBED(a.spotifyId))
        .then(r => r.json())
        .then(d => setCovers(prev => ({
          ...prev,
          [a.spotifyId]: { thumb: d.thumbnail_url, title: d.title },
        })))
        .catch(() => {});
    });
  }, []);

  // Sync selected album to NowPlaying indicator
  useEffect(() => {
    if (!selectedId) { setNowPlaying(null); return; }
    const album = ALBUMS.find(a => a.spotifyId === selectedId);
    const cover = covers[selectedId];
    setNowPlaying({
      title:  cover?.title ?? album?.title ?? '—',
      artist: 'Murilo Ramos',
      kind:   album?.kind ?? '',
    });
  }, [selectedId, covers, setNowPlaying]);

  return (
    <section id="musica" style={{ padding: '160px 56px', borderTop: '1px solid var(--hair)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80, gap: 40 }}>
        <div>
          <div data-reveal style={{ '--rd': '0ms' }}>
            <div className="section-label" style={{ marginBottom: 24 }}>II. — Discografia</div>
          </div>
          <h2 className="h-display" style={{ fontSize: 'clamp(48px, 6vw, 110px)', margin: 0 }}>
            O que se <span className="em">grava no escuro.</span>
          </h2>
        </div>
        <div data-reveal style={{ '--rd': '300ms', maxWidth: 340, fontFamily: 'var(--body)', fontSize: 14, lineHeight: 1.7, color: 'var(--cream2)' }}>
          Quatro registros desde 2018. Cada um é uma noite diferente — a mesma sala, a mesma fumaça, outra hora.
        </div>
      </div>

      {/* Album cards — clicáveis para selecionar o player */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
        {ALBUMS.map((a, i) => {
          const cover   = a.spotifyId ? covers[a.spotifyId] : null;
          const active  = selectedId === a.spotifyId && a.spotifyId;
          const canPlay = !!a.spotifyId;

          return (
            <div
              key={a.id}
              data-reveal
              style={{ '--rd': `${i * 100}ms` }}
            >
              <button
                onClick={() => canPlay && setSelectedId(a.spotifyId)}
                data-cursor={canPlay ? 'play' : 'default'}
                data-cursor-label={canPlay ? 'ouvir' : ''}
                style={{
                  display: 'block', width: '100%',
                  background: 'none', border: 'none', padding: 0,
                  cursor: canPlay ? 'none' : 'default', textAlign: 'left',
                }}
              >
                {/* Cover */}
                <div style={{
                  position: 'relative', aspectRatio: '1/1', overflow: 'hidden',
                  background: 'var(--bg2)',
                  border: `1px solid ${active ? 'var(--amber)' : 'var(--hair)'}`,
                  transition: 'border-color .3s',
                }}>
                  {cover?.thumb
                    ? <img src={cover.thumb} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    : <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(135deg, rgba(212,165,116,.06) 0 8px, transparent 8px 16px)' }} />
                  }
                  {/* Play indicator on active */}
                  {active && (
                    <div style={{
                      position: 'absolute', top: 10, right: 10,
                      background: 'var(--amber)', borderRadius: '50%',
                      width: 28, height: 28,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 10, color: 'var(--bg)',
                    }}>▶</div>
                  )}
                  {!canPlay && (
                    <div style={{
                      position: 'absolute', bottom: 10, left: 10,
                      fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.2em',
                      color: 'var(--cream3)', textTransform: 'uppercase',
                    }}>Em breve</div>
                  )}
                </div>

                {/* Meta */}
                <div style={{ marginTop: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{
                      fontFamily: 'var(--serif)', fontStyle: 'italic',
                      fontSize: 17, color: active ? 'var(--amber)' : 'var(--cream)',
                      lineHeight: 1.2, transition: 'color .3s',
                    }}>
                      {cover?.title ?? a.title}
                    </div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--amber)', letterSpacing: '.15em', flexShrink: 0, marginLeft: 8 }}>
                      {a.year}
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.15em', color: 'var(--cream3)', textTransform: 'uppercase' }}>
                    <span>{a.kind}</span><span>{a.tag}</span>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Spotify embed — atualiza conforme seleção */}
      {selectedId && (
        <div data-reveal style={{ '--rd': '200ms', marginTop: 48 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div className="section-label">Ouvir agora · Spotify</div>
            <a
              href={`https://open.spotify.com/album/${selectedId}`}
              target="_blank" rel="noreferrer"
              className="btn" data-cursor="link"
            >
              Abrir no Spotify ↗
            </a>
          </div>
          <div style={{ border: '1px solid var(--hair)', borderRadius: 4, overflow: 'hidden' }}>
            <iframe
              key={selectedId}
              src={`https://open.spotify.com/embed/album/${selectedId}?theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify player"
              style={{ display: 'block' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
