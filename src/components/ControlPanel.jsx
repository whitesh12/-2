export default function ControlPanel({ data }) {
  return (
    <div className="control">
      <button>추가</button>
      <button>삭제</button>
      <span>총 {data.length}명</span>
    </div>
  );
}