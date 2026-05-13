export default function SummaryCard({ lion }) {
  return (
    <div className="summary-card">
      <h3>{lion.name}</h3>
      <p>{lion.part}</p>
      <p>{lion.intro}</p>
    </div>
  );
}