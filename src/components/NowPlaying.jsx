import { useMusicContext } from '../MusicContext';

export default function NowPlaying() {
  const { nowPlaying } = useMusicContext();

  return (
    <div className="np">
      {nowPlaying ? (
        <>
          <span className="eq"><i/><i/><i/><i/><i/></span>
          <span style={{ color: 'var(--amber)' }}>NP</span>
          <span style={{ fontStyle: 'italic', fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--cream)' }}>
            {nowPlaying.title}
          </span>
          <span style={{ color: 'var(--cream3)' }}>· {nowPlaying.kind}</span>
        </>
      ) : (
        <>
          <span style={{ color: 'var(--cream3)', fontSize: 11, letterSpacing: '.05em' }}>—</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.18em', color: 'var(--cream3)', textTransform: 'uppercase' }}>
            Sem música no momento
          </span>
        </>
      )}
    </div>
  );
}
