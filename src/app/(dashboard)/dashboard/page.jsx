"use client";
import { useState, useEffect } from "react";
import { getAllPlayers } from "@/services/firestoreFunction";
import useSWR from "swr"
import PlayerCard from "@/components/PlayerCard";
import Modal from "@/components/Modal";
import PlayerDetails from "@/components/PlayerDetails";

export default function Teams() {
  const {data, error} = useSWR("teams", getAllPlayers)
  const [players, setPlayers] = useState([]);

  // useEffect(() => {
  //   getAllPlayers()
  //     .then((data) => {
  //       setPlayers(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const [showModal, setShowModal] = useState(false);
  const [showPlayerDetailsModal, setShowPlayersDetailsNodal] = useState(false);
console.log(data);
  return (
    <section className="px-2 flex flex-col gap-2">
      <div className="flex items-center mt-4">
        <h2 className="text-2xl font-righteous text-light-green">Teams</h2>
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
