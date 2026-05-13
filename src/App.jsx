import lions from "./data/lions";
import SummaryCard from "./components/SummaryCard";
import DetailCard from "./components/DetailCard";
import ControlPanel from "./components/ControlPanel";

export default function App() {
  return (
    <div className="app">
      <h1>APP OK</h1>

      <ControlPanel data={lions} />

      <div className="summary-grid">
        {lions.map((lion) => (
          <SummaryCard key={lion.id} lion={lion} />
        ))}
      </div>

      <div className="detail-list">
        {lions.map((lion) => (
          <DetailCard key={lion.id} lion={lion} />
        ))}
      </div>
    </div>
  );
}