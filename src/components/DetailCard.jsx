export default function DetailCard({ lion }) {
  return (
    <div className="detail-card">
      <h3>{lion.name}</h3>
      <p>{lion.desc}</p>

      <ul>
        {lion.skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}