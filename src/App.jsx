import { useReveal, useParallax, useHeroLoad } from './components/useReveal';
import { MusicProvider } from './MusicContext';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Facets from './components/Facets';
import Bio from './components/Bio';
import Discografia from './components/Discografia';
import Agenda from './components/Agenda';
import Videos from './components/Videos';
import Galeria from './components/Galeria';
import Gear from './components/Gear';
import Aulas from './components/Aulas';
import Loja from './components/Loja';
import Imprensa from './components/Imprensa';
import Contato from './components/Contato';
import Footer from './components/Footer';
import NowPlaying from './components/NowPlaying';

export default function App() {
  useReveal();
  useParallax();
  useHeroLoad();

  return (
    <MusicProvider>
      <Cursor />
      <Nav />
      <Hero />
      <Facets />
      <Bio />
      <Discografia />
      <Agenda />
      <Videos />
      <Galeria />
      <Gear />
      <Aulas />
      <Loja />
      <Imprensa />
      <Contato />
      <Footer />
      <NowPlaying />
    </MusicProvider>
  );
}
