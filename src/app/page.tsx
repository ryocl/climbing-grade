import { gradeTable } from "./gradeData";

export default function Home() {
  return (
    <div className="w-full px-4 py-8">
      <h1>グレード表</h1>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">クライミンググレード対応表</caption>
          <thead>
            <tr className="border-b border-zinc-300">
              <th scope="col" className="px-4 py-2 font-semibold">
                日本
              </th>
              <th scope="col" className="px-4 py-2 font-semibold">
                USA
              </th>
              <th scope="col" className="px-4 py-2 font-semibold">
                French
              </th>
            </tr>
          </thead>
          <tbody>
            {gradeTable.map((row) => (
              <tr key={row.japan} className="border-b border-zinc-200">
                <td className="px-4 py-2">{row.japan}</td>
                <td className="px-4 py-2">{row.usa}</td>
                <td className="px-4 py-2">{row.french}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
