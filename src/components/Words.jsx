export default function Words({ text, delay = 0 }) {
  return (
    <span data-reveal="word" style={{ '--rd': `${delay}ms` }}>
      {String(text).split(' ').map((w, i) => (
        <span key={i} className="w" style={{ '--i': i, marginRight: '0.28em' }}>
          <span dangerouslySetInnerHTML={{ __html: w }} />
        </span>
      ))}
    </span>
  );
}
