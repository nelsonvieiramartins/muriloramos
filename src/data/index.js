export const FACETS = [
  { key: 'musica',   kicker: 'I.',   title: 'Música',       sub: 'Guitarrista & baixista — rock, metal, instrumental.' },
  { key: 'biologia', kicker: 'II.',  title: 'Educação',     sub: 'Professor de Ciências e Biologia — método, didática, divulgação.' },
  { key: 'tanato',   kicker: 'III.', title: 'Tanatopraxia', sub: 'Tanatopraxista profissional — ofício, cuidado, dignidade.' },
];

export const ALBUMS = [
  { id: '01', title: 'Cinzas que Falam', year: '2024', kind: 'LP · 9 faixas',  tag: 'instrumental',     spotifyId: '6lKEFeoPK7WYUoKghrGxCU' },
  { id: '05', title: 'Novo Lançamento',  year: '2025', kind: 'Single',          tag: 'heavy',             spotifyId: '5hIJ6CBcDkiil5r2o8BJ4L' },
  { id: '06', title: 'Signs',            year: '2016', kind: 'LP · 10 faixas',  tag: 'heavy metal',       spotifyId: '4o9A36uH9VlLP9PHEmnA5M' },
  { id: '07', title: 'Bloody Room',      year: '2004', kind: 'EP · 5 faixas',   tag: 'death metal',       spotifyId: '645AU5L8sA5zrwOyQLIRTu' },
];

export const SHOWS = [
  { date: '14.MAI', city: 'São Paulo · BR',       venue: 'Audio Club',                kind: 'Solo set',                   status: 'tickets' },
  { date: '22.MAI', city: 'Curitiba · BR',         venue: 'Music Park',                kind: 'Convidado · Plebe Rude',     status: 'tickets' },
  { date: '07.JUN', city: 'Belo Horizonte · BR',   venue: 'Mister Rock',               kind: 'Solo set',                   status: 'tickets' },
  { date: '21.JUN', city: 'Porto Alegre · BR',     venue: 'Opinião',                   kind: 'Trio elétrico',              status: 'few'     },
  { date: '12.JUL', city: 'Lisboa · PT',           venue: 'RCA Club',                  kind: 'Internacional',              status: 'soon'    },
  { date: '03.AGO', city: 'Rio de Janeiro · BR',   venue: 'Circo Voador',              kind: 'Festival Som da Mata',       status: 'tickets' },
];

export const VIDEOS = [
  { id: 'v1', title: 'Cinzas que Falam — playthrough', dur: '4:12',  kind: 'Bass playthrough', img: '/assets/IVI_9033.jpg'         },
  { id: 'v2', title: 'Live at Audio · 2024',           dur: '38:04', kind: 'Show completo',     img: '/assets/IVI_8791-Editar.jpg' },
  { id: 'v3', title: 'Studio diary — Ruído Sagrado',   dur: '12:31', kind: 'Documentário',      img: '/assets/IVI_8577.jpg'        },
  { id: 'v4', title: 'Aula aberta · escalas modais',   dur: '22:09', kind: 'Pedagogia',         img: '/assets/IVI_8883.jpg'        },
];

export const GEAR = [
  { cat: 'Baixo',   items: ['Yamaha TRBX 605 6-string', 'Fender Jazz Bass · CIJ', 'Cort A6 Plus FMMH'] },
  { cat: 'Guitarra',items: ['ESP LTD MH-1000', 'Schecter C-7 Multiscale', 'Telecaster Squier 50s'] },
  { cat: 'Pedais',  items: ['Darkglass B7K Ultra', 'Strymon Iridium', 'Boss DD-200', 'EHX Bass Big Muff'] },
  { cat: 'Amps',    items: ['Aguilar AG 700', 'Mesa/Boogie Subway D-800', 'Marshall JCM 800 (estúdio)'] },
];

export const COURSES = [
  { id: 'c1', title: 'Baixo do zero ao palco',         dur: '12 semanas', level: 'Iniciante'    },
  { id: 'c2', title: 'Groove e leitura rítmica',        dur: '8 semanas',  level: 'Intermediário'},
  { id: 'c3', title: 'Improvisação modal no metal',     dur: '10 semanas', level: 'Avançado'     },
  { id: 'c4', title: 'Biologia para vestibular — aulões', dur: 'Mensal',   level: 'Ensino médio' },
];

export const MERCH = [
  { id: 'm1', title: 'Camiseta · Cinzas',                 price: 'R$ 119', tag: 'Apparel'   },
  { id: 'm2', title: 'LP · Cinzas que Falam',             price: 'R$ 189', tag: 'Vinil 180g'},
  { id: 'm3', title: 'Cordas signature 6 · 0.30–.130',    price: 'R$ 249', tag: 'Acessório' },
  { id: 'm4', title: 'Pôster · A Hora Incerta',           price: 'R$ 59',  tag: 'Print A2'  },
];

export const PRESS = [
  { src: 'Rolling Stone Brasil', quote: '"Um baixista que escreve canções como se fossem trincheiras."',            year: '2024' },
  { src: 'Roadie Crew',          quote: '"Riffs cinematográficos, peso e elegância — raro encontrar os três."',    year: '2023' },
  { src: 'Whiplash.net',         quote: '"Cinzas que Falam é uma obra autoral, densa e necessária."',              year: '2024' },
];

export const SOCIALS = [
  { label: 'Spotify',    href: 'https://open.spotify.com' },
  { label: 'Apple',      href: 'https://music.apple.com'  },
  { label: 'YouTube',    href: 'https://youtube.com'      },
  { label: 'Instagram',  href: 'https://instagram.com'    },
  { label: 'Bandcamp',   href: 'https://bandcamp.com'     },
];
