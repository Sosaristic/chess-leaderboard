"use client";
import { useState, useRef } from "react";
import Filter from "@/components/Filter";
import MatchCard from "@/components/MatchCard";
import UpdateMatchCard from "./UpdateMatchCard";

export default function MatchesPage() {
  const matchID = useRef();
  const [matches, setMatches] = useState([]);
  const [showUpdateMatchModal, setShowUpdateMatchModal] = useState(false);
  const [round, setRound] = useState("");

  function handleUpdateButton(id) {
    matchID.current = id;
    setShowUpdateMatchModal(true);
  }

  return (
    <section>
      <h2 className="text-2xl text-light-green font-[600] text-center">Matches</h2>
      <div className="flex justify-end my-1">
        <Filter setMatches={setMatches} setRound={setRound} />
      </div>
      <div className="flex flex-wrap gap-6">
        <MatchCard
          user={true}
          handleUpdateButton={handleUpdateButton}
          matchesData={matches}
          round={round}
          displayResult={true}
        />
        {showUpdateMatchModal && (
          <UpdateMatchCard
            setShowUpdateMatchModal={setShowUpdateMatchModal}
            matchID={matchID?.current}
            matchData={matches}
          round= {round}
          />
        )}
      </div>
    </section>
  );
}
