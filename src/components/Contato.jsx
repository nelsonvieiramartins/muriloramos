import { useState } from 'react';
import { SOCIALS } from '../data';

const contacts = [
  { label: 'Booking · Brasil',  email: 'booking@muriloramos.com' },
  { label: 'Aulas & cursos',    email: 'aulas@muriloramos.com'   },
  { label: 'Tanatopraxia',      email: 'contato@muriloramos.com' },
  { label: 'Imprensa',          email: 'press@muriloramos.com'   },
];

const assuntos = [
  'Booking · Show',
  'Aulas & cursos',
  'Tanatopraxia',
  'Imprensa',
  'Outro',
];

const field = {
  width: '100%', background: 'transparent',
  border: 'none', borderBottom: '1px solid var(--hair-strong)',
  color: 'var(--cream)', fontFamily: 'var(--body)', fontSize: 15,
  padding: '12px 0', outline: 'none',
  transition: 'border-color .3s',
};

export default function Contato() {
  const [form, setForm]   = useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const [sent, setSent]   = useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contato" style={{ padding: '160px 56px', borderTop: '1px solid var(--hair)', position: 'relative', overflow: 'hidden' }}>
      <div className="smoke" style={{ inset: 0, position: 'absolute', opacity: .35 }}>
        <div className="puff" /><div className="puff b" />
      </div>

      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80 }}>

        {/* Left — heading + direct contacts */}
        <div>
          <div data-reveal style={{ '--rd': '0ms' }}>
            <div className="section-label" style={{ marginBottom: 32 }}>X. — Contato & booking</div>
          </div>
          <h2 className="h-display" style={{ fontSize: 'clamp(56px, 8vw, 160px)', margin: 0, lineHeight: .92 }}>
            <span className="em">Shows, Eventos e</span>
          </h2>

          <div data-reveal style={{ '--rd': '400ms', marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, maxWidth: 620 }}>
            {contacts.map((c) => (
              <div key={c.label}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.3em', color: 'var(--cream3)', textTransform: 'uppercase' }}>
                  {c.label}
                </div>
                <a
                  href={`mailto:${c.email}`}
                  data-cursor="link"
                  style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: 'var(--cream)', marginTop: 10, display: 'block' }}
                >
                  {c.email}
                </a>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" data-cursor="link"
                style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.18em', color: 'var(--cream2)', textTransform: 'uppercase' }}>
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Right — contact form */}
        <div data-reveal style={{ '--rd': '300ms', alignSelf: 'start', borderTop: '1px solid var(--hair)', paddingTop: 32 }}>
          <div className="section-label" style={{ marginBottom: 28 }}>Envie uma mensagem</div>

          {sent ? (
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontStyle: 'italic', color: 'var(--cream)', lineHeight: 1.5 }}>
              Mensagem recebida.<br />
              <span style={{ color: 'var(--amber)' }}>Até breve.</span>
            </div>
          ) : (
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div>
                <label style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.25em', color: 'var(--cream3)', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                  Nome
                </label>
                <input
                  required
                  type="text"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={set('nome')}
                  style={field}
                  onFocus={e => e.target.style.borderColor = 'var(--amber)'}
                  onBlur={e  => e.target.style.borderColor = 'var(--hair-strong)'}
                />
              </div>

              <div>
                <label style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.25em', color: 'var(--cream3)', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                  E-mail
                </label>
                <input
                  required
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={set('email')}
                  style={field}
                  onFocus={e => e.target.style.borderColor = 'var(--amber)'}
                  onBlur={e  => e.target.style.borderColor = 'var(--hair-strong)'}
                />
              </div>

              <div>
                <label style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.25em', color: 'var(--cream3)', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                  Assunto
                </label>
                <select
                  required
                  value={form.assunto}
                  onChange={set('assunto')}
                  style={{ ...field, cursor: 'pointer' }}
                  onFocus={e => e.target.style.borderColor = 'var(--amber)'}
                  onBlur={e  => e.target.style.borderColor = 'var(--hair-strong)'}
                >
                  <option value="" disabled style={{ background: 'var(--bg)' }}>Selecione</option>
                  {assuntos.map(a => (
                    <option key={a} value={a} style={{ background: 'var(--bg)' }}>{a}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.25em', color: 'var(--cream3)', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                  Mensagem
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Escreva aqui..."
                  value={form.mensagem}
                  onChange={set('mensagem')}
                  style={{ ...field, resize: 'none', lineHeight: 1.7 }}
                  onFocus={e => e.target.style.borderColor = 'var(--amber)'}
                  onBlur={e  => e.target.style.borderColor = 'var(--hair-strong)'}
                />
              </div>

              <button className="btn solid" type="submit" data-cursor="link" data-cursor-label="enviar"
                style={{ alignSelf: 'flex-start', marginTop: 4 }}>
                Enviar mensagem ↗
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
