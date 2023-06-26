'use client'
import { useState } from "react";
import Filter from "@/components/Filter";
import MatchCard from "@/components/MatchCard";
import UpdateMatchCard from "./UpdateMatchCard";
import useSWR from "swr";
import { getScheduleFromDB } from "@/services/firestoreFunction";
import { useEffect } from "react";


export default function MatchesPage() {
  const [matches, setMatches] = useState([])
  const [showUpdateMatchModal, setShowUpdateMatchModal] = useState(false)

  console.log(matches);
  return (
    <section>
       <h2 className='text-2xl text-light-green font-[600] text-center'>Matches</h2>
        <div className='flex justify-end my-1'><Filter setMatches={setMatches}/></div>
        <div className='flex flex-wrap gap-6'>
        <MatchCard user={true} setShowUpdateMatchModal={setShowUpdateMatchModal} matchesData = {matches}/>
        {showUpdateMatchModal && <UpdateMatchCard setShowUpdateMatchModal={setShowUpdateMatchModal}/>}

        </div>
    </section>
  );
}
