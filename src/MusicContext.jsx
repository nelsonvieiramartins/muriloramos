import { createContext, useContext, useState } from 'react';

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const [nowPlaying, setNowPlaying] = useState(null);
  // nowPlaying: { title, artist, kind } | null
  return (
    <MusicContext.Provider value={{ nowPlaying, setNowPlaying }}>
      {children}
    </MusicContext.Provider>
  );
}

export const useMusicContext = () => useContext(MusicContext);
