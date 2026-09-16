import { MoveSearch } from "./MoveSearch";
import { moveTable } from "./moveData";

export default function GlossaryMovesPage() {
  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-xl font-bold text-amber-700">ムーブ辞典</h2>
      <div className="mt-6">
        <MoveSearch moves={moveTable} />
      </div>
    </div>
  );
}
