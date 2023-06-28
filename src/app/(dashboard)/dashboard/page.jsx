"use client";
import { useState } from "react";
import { addScheduleToDB, getAllPlayers } from "@/services/firestoreFunction";
import useSWR from "swr";
import PlayerCard from "@/components/PlayerCard";
import Modal from "@/components/Modal";
import PlayerDetails from "@/components/PlayerDetails";
import { generateRoundRobinTeams } from "@/utilities/helperFunction";

export default function Teams() {
  const { data, error } = useSWR("teams", getAllPlayers);

  const [showModal, setShowModal] = useState(false);
  const [showPlayerDetailsModal, setShowPlayersDetailsNodal] = useState(false);
  const handleGenerateSchedule = () => {
    const fixtures = generateRoundRobinTeams(data);
    console.log(fixtures);
    const loopFunction = async () => {
let weekMatches = []
      for (let i = 0; i < fixtures.length; i++) {
        const roundId = `week${i + 1}`;
        const matchData ={...fixtures[i]};
        const id = `match${i + 1}`
        weekMatches.push(fixtures[i])
        // await addScheduleToDB(roundId, matchData, id);
      }

      for(let k = 0; k<weekMatches.length; k++){
        const match = weekMatches[k]
        const round = `round${k + 1}`
        for(let j = 0; j<match.length; j++){
         const matchID = `match${j + 1}`
          await addScheduleToDB(round, matchID, match[j])
        }
        console.log(`round${k}`);
      }
    };

    loopFunction()
  };
  return (
    <section className="px-2 flex flex-col gap-2 pb-2">
      <div className="flex items-center mt-4">
        <h2 className="text-2xl font-righteous text-light-green">Teams</h2>
        <button
          className="ml-auto bg-light-green h-[2.5rem] px-2 rounded-md"
          onClick={handleGenerateSchedule}
        >
          Generate Schedule
        </button>
        <button
          type="button"
          className="ml-auto bg-light-green h-[2.5rem] px-2 rounded-md"
          onClick={() => setShowPlayersDetailsNodal(true)}
        >
          Add Players
        </button>
      </div>
      <section className="flex flex-col gap-2">
        {data?.map((item, index) => {
          return (
            <PlayerCard
              key={index}
              name={item.playerName}
              setShowModal={setShowModal}
              setShowPlayersDetailsNodal={setShowPlayersDetailsNodal}
            />
          );
        })}

        {showModal && <Modal closeDialog={() => setShowModal(false)} />}
        {showPlayerDetailsModal && (
          <PlayerDetails closePlayerDetailsDialog={setShowPlayersDetailsNodal} />
        )}
      </section>
    </section>
  );
}
