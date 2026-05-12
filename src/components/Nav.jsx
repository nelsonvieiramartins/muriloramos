export default function Nav() {
  const links = [
    { label: 'Música',   href: '#musica'   },
    { label: 'Bio',      href: '#bio'      },
    { label: 'Agenda',   href: '#agenda'   },
    { label: 'Vídeos',   href: '#videos'   },
    { label: 'Aulas',    href: '#aulas'    },
    { label: 'Loja',     href: '#loja'     },
    { label: 'Contato',  href: '#contato'  },
  ];

  return (
    <header className="nav">
      <div className="ml" data-cursor="link">
        <span className="cross" />
        <span>Murilo Ramos</span>
      </div>
      <nav className="links">
        {links.map((l) => (
          <a key={l.label} href={l.href} data-cursor="link">{l.label}</a>
        ))}
      </nav>
      <a className="ml" data-cursor="link" href="#contato">
        <span>Booking →</span>
      </a>
    </header>
  );
}
