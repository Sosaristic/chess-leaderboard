import { players } from "../../components/data";
export default function LeaderBoard() {
  return (
    <section>
      <h2 className="text-2xl mt-4 capitalize text-light-green font-[600]">leaderboard 🏆</h2>
      <table className="w-full border-2 border-dark-green border-spacing-3">
        <thead className="bg-light-green border">
          <tr>
            <th className="p-2">NO</th>
            <th>Name</th>
            <th>Games</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody className="text-center capitalize text-lg ">
          {players?.map((player, index) => {
            const { id, name, games, points } = player;
            return (
              <tr key={id} className="border border-light-green px-2">
                <td className="p-2">{index+ 1}</td>
                <td>{name}</td>
                <td>{games}</td>
                <td>{points}</td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
