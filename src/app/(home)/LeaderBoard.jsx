'use client'
import useSWR from "swr"
import { players } from "../../components/data";
import { getAllPlayers } from "@/services/firestoreFunction";
export default function LeaderBoard() {
  const {data, error} = useSWR("teams", getAllPlayers)

  if( error){
    return <div className="text-center mt-4">Error trying to get data</div>
  }
  if(!data){
    return <div className="text-center mt-4">Fetching data....</div>
  }
  return (
    <section className="pb-2">
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
          {data?.map((player, index) => {
            const { playerName, games, points } = player;
            return (
              <tr key={index} className="border border-light-green px-2">
                <td className="p-2">{index+ 1}</td>
                <td>{playerName}</td>
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
